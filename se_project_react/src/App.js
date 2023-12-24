import Header from "./Header/Header";
import Main from "./Main/Main";
import "./App.css";
import WeatherCard from "./WeatherCard/WeatherCard";
import ItemCard from "./ItemCard/ItemCard";



function App() {
  const weatherTemp = '65 F'
  return (
    <div>
      <Header />
      <Main weatherTemp = {weatherTemp} />
    </div>
  );




}

export default App;
