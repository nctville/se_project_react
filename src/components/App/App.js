import "./App.css";
import api from "../../utils/api";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
// import WeatherCard from "./WeatherCard/WeatherCard";
// import ItemCard from "./ItemCard/ItemCard";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import { useEffect, useState } from "react";
import { checkToken, signin, signup } from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ItemModal from "../ItemModal/ItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setcurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleLoginModal = () => {
    setActiveModal("login");
  };
  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  // const onAddItem = (e) => {
  //   e.preventDefault();
  // };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setcurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setcurrentTemperatureUnit("C");
  };

  const handleAddItemSubmit = ({ name, weather, imageUrl }) => {
    api
      .addItem({ name, weather, imageUrl })
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardDelete = (selectedCard) => {
    api
      .deleteItem(selectedCard)
      .then(() => {
        const newClothesList = clothingItems.filter((card) => {
          return card._id !== selectedCard._id;
        });
        setClothingItems(newClothesList);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegisterSubmit = ({ name, avatar, email, password }) => {
    setLoading(true);
    signup(name, avatar, email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLoginSubmit = ({ email, password }) => {
    setLoading(true);
    signin(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        handleCloseModal();
      })
      .catch((err) => {
        console.error("Login failed:", err);
        // Handle login failure if necessary
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setLoading(true);
      checkToken(token)
        .then((userData) => {
          setCurrentUser(userData);
          setLoggedIn(true);
        })
        .catch((error) => {
          console.error("Token validation failed:", error);
          // Handle token validation failure
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

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

  useEffect(() => {
    api
      .getItemList()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page__content">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={handleCreateModal}
          city={city}
          handleLoginModal={handleLoginModal}
          handleRegisterModal={handleRegisterModal}

        />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              handleCreateModal={handleCreateModal}
              loggedIn={loggedIn}
            />
          </ProtectedRoute>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            // onAddItem={onAddItem}
            handleCreateModal={handleCreateModal}
            handleAddItemSubmit={handleAddItemSubmit}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onCardDelete={handleCardDelete}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            onClose={handleCloseModal}
            isOpen={activeModal === "login"}
            onSubmit={handleLoginSubmit}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal
            onClose={handleCloseModal}
            isOpen={activeModal === "register"}
            onSubmit={handleRegisterSubmit}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
