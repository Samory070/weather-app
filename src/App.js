import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title.js';
import Form from './Components/Form.js';
import Weather from './Components/Weather.js';
// API key
const API_KEY = '69e016510672bc434645f7b43f25c61a';


class App extends Component {
    state = {
        temperature: undefined,
        temp_min: undefined,
        temp_max: undefined,
        wind: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    // Get values from API
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        // API data converted to json using dot notation
        const data = await api_call.json();
        console.log(data);
        if(city && country) {
            // Sets new state of undefined state
            this.setState({
                temperature: data.main.temp,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                wind: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ''
            });

        }else {
            this.setState({
                temperature: undefined,
                temp_min: undefined,
                temp_max: undefined,
                wind: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter values."
            });
        }
        // console.log(this.state)
    }
    render() {
        return (
            <div>
                < Title />
                < Form getWeather={this.getWeather} />
                < Weather
                    temperature={this.state.temperature}
                    temp_min={this.state.temp_min}
                    temp_max={this.state.temp_max}
                    wind={this.state.wind}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;
