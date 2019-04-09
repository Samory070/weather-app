import React, { Component } from 'react';

class Weather extends React.Component {
    render() {
        return(
            <div>
                { this.props.city && this.props.country &&  <p>Location: { this.props.city }, { this.props.country }</p>}
                { this.props.temperature && <p>Temperature: { this.props.temperature }</p> }
                { this.props.description && <p>Conditions: { this.props.description }</p> }
                { this.props.temp_min && <p>Low Temp: { this.props.temp_min }</p> }
                { this.props.temp_max && <p>High Temp: { this.props.temp_max }</p> }
                { this.props.humidity && <p>Humidity: { this.props.humidity }</p> }
                { this.props.wind && <p>Wind Speed: { this.props.wind }</p> }
                { this.props.error && <p>{ this.props.error }</p> }
            </div>
        );
    }
};

export default Weather;
