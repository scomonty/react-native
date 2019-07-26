import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Header from './Header';
import WeatherDetail from './WeatherDetail';
import LocationDetail from './LocationDetail';


class WeatherApi extends Component {
	//set our initial state to empty array
	state = { weatherData: [], hourlyWeatherData: [] };

	componentWillMount() {


    // Instead of navigator.geolocation, just use Geolocation.
        Geolocation.getCurrentPosition(
            (position) => {
            	fetch(`https://api.weather.gov/points/${position.coords.latitude},${position.coords.longitude}`)
    .then((response) => response.json())
    //set the state for weatherData
   	.then((responseData) => this.setState({ weatherData: responseData }) )
   	//call getLocalForcast one api data is returned and make second call to get local forecast
   	.then(() => this.getLocalForcast(this.state.weatherData) );
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
	}

	getLocalForcast(responseData) {
		//once we have the location forecast URL make call to second API for forecast details.
		const location = responseData.properties.forecastHourly;
  fetch(location)
   	.then((response) => response.json())
   	//set the state to 5 day forecast data
   		.then((responseData) => this.setState({ hourlyWeatherData: responseData.properties.periods} ));
   				}

   				renderWeather() {
		return this.state.hourlyWeatherData.map(weather => <WeatherDetail key={weather.number} weather={weather} />);
	}
	   				renderLocation() {
	   					if(this.state.weatherData.hasOwnProperty('properties') ) {
	   								return <LocationDetail location={this.state.weatherData.properties.relativeLocation.properties} />
	   					}
	}

	render() {
		console.log(this.state.hourlyWeatherData);
		return(
			<View>
			<Header headerTitle="Weather Forecast"/>
{this.renderLocation()}
{this.renderWeather()}
			</View>
			)
	}
}

export default WeatherApi;
