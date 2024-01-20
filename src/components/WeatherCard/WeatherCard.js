import './WeatherCard.css'
import { weatherOptions } from '../../utils/constants';
import { CurrentTempUnitContext } from '../../contexts/CurrentTempUnitContext'
import { useContext } from 'react';

const WeatherCard = ({ day, type, weatherTemp }) => {
  const {currentTempUnit} = useContext(CurrentTempUnitContext)
  const imgSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imgSrcUrl = imgSrc[0].url || ""
  return (
    <section className="weather" id="weather">
      <div className="weather_temp">{weatherTemp}°{currentTempUnit}</div>
      <div>
        <img src={imgSrcUrl} className="weather_image" alt="weather" />
      </div>
    </section>
  );
};

export default WeatherCard;
