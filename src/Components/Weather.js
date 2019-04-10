import React, { Component } from 'react';



// stateless component
const Weather = props => (
        <div className="weather__info">
            {
                props.city && props.country &&  <p className="weather__key">Location:
                    <span className="weather__value"> { props.city }, { props.country }</span>
                </p>
            }
            {
                props.temperature && <p className="weather__key">Temperature:
                    <span className="weather__value" > { props.temperature }</span>
                </p>
            }
            {
                props.description && <p className="weather__key">Conditions:
                    <span className="weather__value"> { props.description }</span>
                </p>
            }
            {
                props.temp_min && <p className="weather__key">Low Temp:
                    <span className="weather__value">{ props.temp_min }</span>
                </p>
            }
            {
                props.temp_max && <p className="weather__key">High Temp:
                    <span className="weather__value"> { props.temp_max }</span>
                </p>
            }
            {
                props.humidity && <p className="weather__key">Humidity:
                    <span className="weather__value"> { props.humidity }</span>
                </p>
            }
            {
                props.wind && <p className="weather__key">Wind Speed:
                    <span className="weather__value"> { props.wind }</span>
                </p>
            }
            {
                props.error && <p className="weather__error">
                    { props.error }
                </p>
            }
        </div>

)
export default Weather;


// class Weather extends React.Component {
//     render() {
//         return(
//             <div>
//                 { this.props.city && this.props.country &&  <p>Location: { this.props.city }, { this.props.country }</p>}
//                 { this.props.temperature && <p>Temperature: { this.props.temperature }</p> }
//                 { this.props.description && <p>Conditions: { this.props.description }</p> }
//                 { this.props.temp_min && <p>Low Temp: { this.props.temp_min }</p> }
//                 { this.props.temp_max && <p>High Temp: { this.props.temp_max }</p> }
//                 { this.props.humidity && <p>Humidity: { this.props.humidity }</p> }
//                 { this.props.wind && <p>Wind Speed: { this.props.wind }</p> }
//                 { this.props.error && <p>{ this.props.error }</p> }
//             </div>
//         );
//     }
// };
