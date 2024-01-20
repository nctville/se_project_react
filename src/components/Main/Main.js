import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";

import "./Main.css";

function Main({ weatherTemp, onSelectCard }) {

  const { currentTempUnit } = useContext(CurrentTempUnitContext);
  const temp = weatherTemp?.temperature?.[currentTempUnit] || 999
  

  const weatherType = useMemo(() => {
   

    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="day-cloudy" weatherTemp={temp} />
      <section className="card_section" id="card-section">
        <div className="card_info">
          Today is {temp}°F / You may want to wear:
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
