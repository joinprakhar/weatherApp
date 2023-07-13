import React from "react";
import PropTypes from 'prop-types';

const WeatherReport = ({ weatherData, units }) => {
//{weatherData.weather?.main}
  return (
    <div className="weather-report">
      <div className="main_panel">
        <div>
        <h2 className="big">{weatherData.name}{" "}{weatherData.sys?.country}</h2>
        <h3 className="conditions">
          {weatherData?.main?.temp}&#176;{units} |
          {weatherData?.main?.feels_like}&#176;{units} </h3>
        </div>
        <img src="https://w7.pngwing.com/pngs/530/127/png-transparent-weather-forecasting-national-weather-service-weather-radar-weather-atmosphere-cloud-weather-forecasting-thumbnail.png" alt="fffaa" />
      </div>

      <div className="container">
      <div className="temperature">
        <div className="box">
          <p>CURRENT TEMPERATURE</p>
          <h2>{weatherData.main?.temp}&#176;{units}</h2>
        </div>
        <div className="box">
          <p>MAXIMUM TEMPERATURE</p>
          <h2>{weatherData.main?.temp_max}&#176;{units}</h2>
        </div>
        <div className="box">
          <p>MINIMUM TEMPERATURE</p>
          <h2>{weatherData.main?.temp_min}&#176;{units}</h2>
        </div>
      </div>
      <div className="wind">
        <div className="box">
          <p>WIND SPEED</p>
          <h2>{weatherData.wind?.speed} meter/sec</h2>
        </div>
        <div className="box">
          <p>WIND DIRECTION</p>
          <h2>{weatherData.wind?.deg} degrees</h2>
        </div>
      </div>
      <div className="pressure">
        <div className="box">
          <p>PRESSURE</p>
          <h2>{weatherData.main?.pressure} hPa</h2>
        </div>
        <div className="box">
          <p>HUMIDITY</p>
          <h2>{weatherData.main?.humidity} %</h2>
        </div>
      </div>
      </div>
    </div>
  );
};

WeatherReport.propTypes = {
  units: PropTypes.string,
  weatherData: PropTypes.shape({
    location: PropTypes.string,
    icon: PropTypes.string,
    conditions: PropTypes.string,
    temp: PropTypes.number,
    temp_max: PropTypes.number,
    temp_min: PropTypes.number,
    feels_like: PropTypes.number,
    wind_speed: PropTypes.number,
    wind_direction: PropTypes.number,
    pressure: PropTypes.number,
    humidity: PropTypes.number
  })
};


export default WeatherReport;
