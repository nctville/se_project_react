// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const latitude = 40.7143;
const longitude = -74.006;
const APIkey = "4abcee14736c7db8a4c89dd2d9b13f36";


export const getForecastWeather = () => {
  const weatherApi =
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey} 
    `).then((res) => {
        
        if(res.ok){
        return res.json()
    }else{
        return Promise.reject(`Error: ${res.status}`)
    }})
    return weatherApi;
};

export const parseWeatherData = (data)=>{
    
    const main = data.main
    const temperature = main && main.temp
    
    return Math.ceil(temperature)
}

