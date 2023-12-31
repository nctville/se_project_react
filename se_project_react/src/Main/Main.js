import { defaultClothingItems } from "../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo } from "react";

function Main({ weatherTemp, onSelectCard }) {
  
  const weatherType= useMemo(()=>{
    if (weatherTemp >= 86) {
      return 'hot';
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return 'warm';
    } else if (weatherTemp <= 65) {
      return 'cold';
    }
  
  }, [weatherTemp])


  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType
  })
  

  return (
    <main className="main">
      <WeatherCard day={true} type="day-cloudy" weatherTemp={weatherTemp} />
      <section className="card_section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card_items">
          {filteredCards.map((x) => {
            return <ItemCard key={x._id} x={x} onSelectCard={onSelectCard} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
