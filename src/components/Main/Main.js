import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";
import React from "react";
import "./Main.css";

function Main({ weatherTemp, onSelectCard, clothingItems }) {

  const { currentTempUnit } = useContext(CurrentTempUnitContext);
  const temp = weatherTemp?.temperature?.[currentTempUnit] || 999

  const weatherType = useMemo(() => {
    if (currentTempUnit === 'C') {
      if (temp >= 30) {
        return 'hot';
      } else if (temp >= 18 && temp <= 29) {
        return 'warm';
      } else if (temp <= 17) {
        return 'cold';
      }
    } else {
      // Assuming currentTempUnit is 'F'
      if (temp >= 86) {
        return 'hot';
      } else if (temp >= 66 && temp <= 85) {
        return 'warm';
      } else if (temp <= 65) {
        return 'cold';
      }
    }
  }, [weatherTemp, currentTempUnit]);
  
  

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="day-cloudy" weatherTemp={temp} />
      <section className="card_section" id="card-section">
        <div className="card_info">
          Today is {temp}°{currentTempUnit} / You may want to wear:
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
