import React, { Component } from 'react';

class Weather extends React.Component {
    render() {
        return(
            <div>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidty}</p>}
                {this.props.error && <p>Error: {this.props.error}</p>}
            </div>
        );
    }
};

export default Weather;