import React from 'react';
import './HourlyForecastWeather.scss'

class HourlyForecastWeather extends React.Component{
    render(){
        const forecastItems = this.props.hourlyForecast.map( (f, i) => {
            
            const iconUrl = `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`
            const key = `forecast-items_${i}`
            let timeMark = 'AM'
            let hour = new Date(f.dt * 1000).getHours()
            if(hour > 12){
                hour = hour - 12;
                timeMark = 'PM';
            }

            return(
                <div className='forecast-item' key={key}>
                    <p className='forecast-item__hour'>{hour}:00 {timeMark}{''}</p>
                    <p className='forecast-item__temp'>{Math.round(f.temp).toFixed(0)}</p>
                    <img src={iconUrl} alt={f.weather[0].description} className='forecast-item__icon' />
                    <p className='forecast-item__description'>{f.weather[0].main}</p>
                </div>
            )

        } )

        return(
            <>  
                <div className='forecast'>
                    <h1 className='forecast-title'>Hourly forecast</h1>
                        <div className='forecast-items'>
                            {forecastItems}
                        </div>
                </div>
            </>
        )
    }
}   

export default HourlyForecastWeather