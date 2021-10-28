import React from 'react'

import './App.scss';

import SearchBar from './components/search-bar/SearchBar'
import CurrentWeather from './components/current-weather/CurrentWeather'
import HourlyForecastWeather from './components/forecast-weather/HourlyForecastWeather';
import DailyForecastWeather from './components/forecast-weather/DailyForecastWeather';

import { getCurrentWeather, getHourlyForecastWeather } from './apis/open-weather.api' 


class App extends React.Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            location: 'Ivano-Frankivsk',
            temp: '',
            feelslike: '',
            main: '',
            description: '',
            icon: '',
            min: '',
            max: '',
            humidity: '',
            pressure: '',
            windSpeed: '',
            hourlyForecast: [],
        }

    }

    componentDidMount(){
        this.onFormSubmit();
    }

    onInputChange(e){
        this.setState({
            location: e.target.value
        })
    }

    async onFormSubmit(){
        const currentWeatherResp = await getCurrentWeather(this.state.location)
        
        const lon = currentWeatherResp.data.coord.lon;
        const lat = currentWeatherResp.data.coord.lat;
        
        const hourlyForecastWeatherResp = await getHourlyForecastWeather(lon, lat)
        
        this.setState({
            temp: currentWeatherResp.data.main.temp,
            feelslike: currentWeatherResp.data.main.feels_like,
            description: currentWeatherResp.data.weather[0].main,
            icon: currentWeatherResp.data.weather[0].icon,
            min: currentWeatherResp.data.main.temp_min,
            max: currentWeatherResp.data.main.temp_max,
            humidity: currentWeatherResp.data.main.humidity,
            pressure: currentWeatherResp.data.main.pressure,
            windSpeed: currentWeatherResp.data.wind.speed,
            hourlyForecast: hourlyForecastWeatherResp.data.hourly, 
        })

    }    
    render(){
        return (
            <>
                <div className='App'>
                    <header className='App-header'>
                        <SearchBar 
                            location={this.state.location} 
                            inputChange={ (e) => this.onInputChange(e) }
                            formSubmitted={ () => this.onFormSubmit() }
                        />

                        <CurrentWeather 
                            currentTemperature={this.state.temp} 
                            description={this.state.description}
                            icon={this.state.icon}
                            feelslike={this.state.feelslike}
                            min = {this.state.min}
                            max = {this.state.max}
                            humidity = {this.state.humidity}
                            pressure = {this.state.pressure}
                            windSpeed = {this.state.windSpeed}
                        />

                        <HourlyForecastWeather 
                            hourlyForecast={this.state.hourlyForecast}
                        />

                        <DailyForecastWeather />
                    </header>
                </div>
            </>
        )
    }

}

export default App
