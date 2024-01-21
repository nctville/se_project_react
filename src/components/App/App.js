import "./App.css";

import Header from "../Header/Header";
// import WeatherCard from "./WeatherCard/WeatherCard";
// import ItemCard from "./ItemCard/ItemCard";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleToggleSwitchChange = () => {
    if (currentTempUnit === "C") setCurrentTempUnit("F");
    if (currentTempUnit === "F") setCurrentTempUnit("C");
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const currentCity = data.name;
        setCity(currentCity);
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="page__content">
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} city={city} />

        <Switch>
          <Route exact path  ='/'>
            <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
          </Route>
          <Route  path  ='/profile'>
            PROFILE
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm
            onClose={handleCloseModal}
            className="modal__container"
            title="New garment"
            buttonText="Add garment"
          >
            <div className="modal__form-field">
              <label className="modal__label">
                Name
                <input
                  className="modal__input modal__input_type_name"
                  type="text"
                  name="name"
                  minLength="1"
                  maxLength="40"
                  placeholder="Name"
                />
              </label>
            </div>
            <div className="modal__form-field">
              <label className="modal__label">
                Image
                <input
                  className="modal__input modal__input_type_url"
                  type="url"
                  name="link"
                  minLength="1"
                  maxLength="40"
                  placeholder="Image URL"
                />
              </label>
            </div>
            <p className="modal__select-title">Select the weather type:</p>
            <div className="modal__select-buttons">
              <div>
                <label>
                  <input
                    className="modal__button"
                    name="weatherType"
                    type="radio"
                    id="hot"
                    value="hot"
                  />
                  Hot
                </label>
              </div>
              <div>
                <label>
                  <input
                    className="modal__button"
                    name="weatherType"
                    type="radio"
                    id="warm"
                    value="warm"
                  />
                  Warm
                </label>
              </div>
              <div>
                <label>
                  <input
                    className="modal__button"
                    name="weatherType"
                    type="radio"
                    id="cold"
                    value="cold"
                  />
                  Cold
                </label>
              </div>
            </div>
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTempUnitContext.Provider>
    </div>
  );
}

export default App;
