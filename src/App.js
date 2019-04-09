import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title.js';
import Form from './Components/Form.js';
import Weather from './Components/Weather.js';

const API_KEY = '69e016510672bc434645f7b43f25c61a';


class App extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

        const data = await api_call.json();

        console.log(data);
        this.setState({
            temperature: data.main.temp,
            city: data.sys.country,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ''
        });
    }
    render() {
        return (
            <div>
                < Title />
            < Form getWeather={this.getWeather}/>
        < Weather
        temperature={this.state.temperature}
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
