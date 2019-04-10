import React, { Component } from 'react';



// stateless component
const Weather = props => (
        <div className="waether__info">
            { props.city && props.country &&  <p>Location: { props.city }, { props.country }</p>}
            { props.temperature && <p>Temperature: { props.temperature }</p> }
            { props.description && <p>Conditions: { props.description }</p> }
            { props.temp_min && <p>Low Temp: { props.temp_min }</p> }
            { props.temp_max && <p>High Temp: { props.temp_max }</p> }
            { props.humidity && <p>Humidity: { props.humidity }</p> }
            { props.wind && <p>Wind Speed: { props.wind }</p> }
            { props.error && <p>{ props.error }</p> }
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
