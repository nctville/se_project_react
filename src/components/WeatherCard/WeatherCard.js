import './WeatherCard.css'
// import { weatherOptions } from '../../utils/constants';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext'
import { useContext } from 'react';

const WeatherCard = ({ day, type, weatherTemp }) => {
  const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext)
  const weatherOptions = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imgSrcUrl = weatherOptions[0].url || ""
  return (
    <section className="weather" id="weather">
      <div className="weather_temp">{weatherTemp}°{currentTemperatureUnit}</div>
      <div>
        <img src={imgSrcUrl} className="weather_image" alt="weather" />
      </div>
    </section>
  );
};

export default WeatherCard;
