import Header from "./Header/Header";
import Main from "./Main/Main";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import ItemModal from "./ItemModal/ItemModal";
import Footer from "./Footer/Footer";
import "./App.css";
import { useState, useEffect } from "react";
import { getForecastWeather, parseWeatherData } from "./utils/weatherApi";


function App() {
  const weatherTemp = "65 F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0)
  

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview")
    setSelectedCard(card);
  };

 
  useEffect(()=>{
    getForecastWeather().then((data)=>{
      
      const temperature = parseWeatherData(data)
      console.log(temperature);
      setTemp(temperature)
    })
  }, [])
  console.log(temp)

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard}  />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="Add Garment" onClose={handleCloseModal}>
          <label>
            Name
            <input type="text" name="name" minLength="1" maxLength="40" />
          </label>
          <label>
            Image
            <input type="url" name="link" minLength="1" maxLength="40" />
          </label>
          <p>Select the weather type:</p>
          <div>
            <div>
              <input type="radio" id="hot" value="hot" />
              <label>Hot</label>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label>Warm</label>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" id="cold" value="cold" />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && 
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      }
    </div>
  );
}

export default App;