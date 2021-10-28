import axios from 'axios'

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5/'
const appIdQueryParam = `appid=${process.env.REACT_APP_API_KEY}`

const getCurrentWeather = (Location) =>{
    return axios.get(
        `weather?q=${Location}&units=metric&${appIdQueryParam}`
    )
}

const getHourlyForecastWeather = (lat, lon) =>{
    return axios.get(
        `onecall?lat=${lat}&lon=${lon}&units=metric&${appIdQueryParam}`
    )
}

const getDailyForecastWeather = (Location) =>{
    return axios.get(
        `forecast?q=${Location}&units=metric&${appIdQueryParam}`
    )
}

export {
    getCurrentWeather,
    getHourlyForecastWeather,
    getDailyForecastWeather
}