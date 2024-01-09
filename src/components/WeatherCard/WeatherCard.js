import './WeatherCard.css'
import { weatherOptions } from '../../utils/constants';

const WeatherCard = ({ day, type, weatherTemp }) => {
  const imgSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imgSrcUrl = imgSrc[0].url || ""
  return (
    <section className="weather" id="weather">
      <div className="weather_temp">{weatherTemp}°F</div>
      <div>
        <img src={imgSrcUrl} className="weather_image" alt="weather" />
      </div>
    </section>
  );
};

export default WeatherCard;
