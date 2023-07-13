import React, { Component } from "react";
import Input from "./components/Input";
import WeatherReport from "./components/WeatherReport";
import SetUnits from "./components/SetUnits";
import SearchResults from "./components/SearchResults";
import debounce from 'lodash.debounce';

class App extends Component {
    state = {
        tempreture: "metric",
        temp: "C",
        city: null,
        searchCity: null,
        data: {},
        isLoading: false,
        isError: false,
        citi: "",
        latitude: 28.6139,
        longitude: 77.2090,
        error: null
    }




    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.handleSuccess,
                this.handleError
            );
        } else {
            this.setState({ error: 'Geolocation is not supported' });
        }

        this.getWeather();
    }

    handleSuccess = (position) => {
        const { latitude, longitude } = position.coords;
        this.setState({ latitude, longitude });
        this.getCityName(latitude, longitude);
    }

    handleError = (error) => {
        this.setState({ error: error.message });
    }

    getCityName = async (latitude, longitude) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            const city = this.extractCityFromGeocodeResult(data);
            this.setState({ city });
        } catch (error) {
            console.error('Error fetching city name:', error);
        }
    }

    extractCityFromGeocodeResult = (data) => {
        const address = data.address;
        return address.city || address.town || address.village || address.hamlet || address.suburb || null;
    }



    componentDidUpdate(_, prevState) {
        if (prevState.temp !== this.state.temp || prevState.city !== this.state.city) {
            this.getWeather();
        }
    }

    getWeather = async () => {
        this.setState({
            isLoading: true
        });
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=546b7daeb21aad1b7696e3203df93a2e&units=${this.state.tempreture}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    data: data,
                    isLoading: false
                });
            })
            .catch((error) => {
                this.setState({
                    isError: true
                });
            });
    };



    searchLocations = debounce(async () => {
        console.log(this.state.citi)

    }, 500);


    getCity = (data) => {
        this.setState({
            city: data,
        });

    };

    setTemp = (value) => {
        this.setState({
            tempreture: value === "Celsius" ? "metric" : "imperial",
            temp: value === "Celsius" ? "C" : "K"
        })
    };

    searchLocation = (data) => {
        this.setState({
            city: data,
            searchCity: null,
        })
    }



    render() {
        return (
            <div className="weather-app">
                <h1>WeatherWatch</h1>
                <div className="inputbox">
                    <div>
                        <Input getCity={this.getCity} />
                    
                        <SetUnits onChange={this.setTemp} value={this.temp} />
                        {this.state.isError ?
                            this.state.isLoading ?
                                <div className='error-panel' /> :
                                <div className="is-loading" /> :
                            <WeatherReport weatherData={this.state.data} units={this.state.temp} />}
                    </div>
                </div>

            </div>

        );
    }
}
export default App;
