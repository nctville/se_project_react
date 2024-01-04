import './WeatherCard.css'
const weatherOptions = [
  { url: require('../images/day-sunny.svg').default, day: true, type: "day-sunny" },
  { url: require('../images/day-cloudy.svg').default, day: true, type: "day-cloudy" },
  { url: require('../images/day-fog.svg').default, day: true, type: "day-fog" },
  { url: require('../images/day-rainy.svg').default, day: true, type: "day-rainy" },
  { url: require('../images/day-storm.svg').default, day: true, type: "day-storm" },
  { url: require('../images/day-snow.svg').default, day: true, type: "day-snow" },

  { url: require('../images/night-cloudy.svg').default, day: false, type: "night-cloudy" },
  { url: require('../images/night-fog.svg').default, day: false, type: "night-fog" },
  { url: require('../images/night-moon.svg').default, day: false, type: "night-moon" },
  { url: require('../images/night-rainy.svg').default, day: false, type: "night-rainy" },
  { url: require('../images/night-storm.svg').default, day: false, type: "night-storm" },
  { url: require('../images/night-snow.svg').default, day: false, type: "night-snow" },
];

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
