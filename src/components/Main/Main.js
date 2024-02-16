import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import React from "react";
import "./Main.css";

function Main({ weatherTemp, onSelectCard, clothingItems }) {

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999

  const weatherType = useMemo(() => {
    if (currentTemperatureUnit === 'C') {
      if (temp >= 30) {
        return 'hot';
      } else if (temp >= 18 && temp <= 29) {
        return 'warm';
      } else if (temp <= 17) {
        return 'cold';
      }
    } else {
      // Assuming currentTemperatureUnit is 'F'
      if (temp >= 86) {
        return 'hot';
      } else if (temp >= 66 && temp <= 85) {
        return 'warm';
      } else if (temp <= 65) {
        return 'cold';
      }
    }
  }, [weatherTemp, currentTemperatureUnit]);
  
  

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="day-cloudy" weatherTemp={temp} />
      <section className="card_section" id="card-section">
        <div className="card_info">
          Today is {temp}°{currentTemperatureUnit} / You may want to wear:
        </div>
        <div className="card_items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
