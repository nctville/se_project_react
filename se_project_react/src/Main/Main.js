import { defaultClothingItems } from "../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";


function Main({weatherTemp}) {
    return <main className="main">
      <WeatherCard day={true} type="day-cloudy" weatherTemp={weatherTemp} />
      <section className="card_section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card_items">
          {defaultClothingItems.map((x) => {

            return (
              <ItemCard key={x._id} x={x} />
            );
          })}
        </div>
      </section>
    </main>;
  }

export default Main