import React from 'react'
import './CurrentWeather.scss'

class CurrentWeather extends React.Component{
    render(){   

        let img;
        if(this.props.icon){
            const iconUrl = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`
            img = (
                <img src={iconUrl} alt={this.props.description} className='current-weather__main-data_icon' />
            )
        }

        return(
            <>
                <div className='current-weather'>
                    <div className='current-weather__main-data'>
                        <p className='current-weather__main-data_temp'>{Math.round(this.props.currentTemperature)}<span><sup>&deg;</sup></span></p>
                        <p className='current-weather__main-data_description'>{this.props.description}</p>
                        {img}
                    </div>

                    <div className='current-weather__additional-data'>
                        <p className='current-weather__additional-data_items'>Feels like: <span>{Math.floor(this.props.feelslike)}</span><span>&deg;</span></p>
                        <p className='current-weather__additional-data_items'>Min temp: <span>{Math.floor(this.props.min)}</span><span>&deg;</span></p>
                        <p className='current-weather__additional-data_items'>Max temp: <span>{Math.round(this.props.max)}</span><span>&deg;</span></p>
                        <p className='current-weather__additional-data_items'>Humidity: <span>{Math.floor(this.props.humidity)}</span><span>%</span></p>
                        <p className='current-weather__additional-data_items'>Pressure: <span>{Math.floor(this.props.pressure)}</span><span>hPa</span></p>
                        <p className='current-weather__additional-data_items'>Wind speed: <span>{this.props.windSpeed}</span><span>m/s</span></p>
                    </div>
                </div>
            </>
        )
    }
}

export default CurrentWeather