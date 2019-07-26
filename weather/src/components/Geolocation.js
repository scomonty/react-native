
//file not currently in use
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import WeatherApi from './WeatherApi';

class Location extends Component {
    state = {latitude:'', longitude: ''};

componentDidMount() {
    // Instead of navigator.geolocation, just use Geolocation.
        Geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude:position.coords.latitude, longitude:position.coords.longitude});
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
}

render() {
    console.log(this.state.latitude, this.state.longitude);
	return (
<View>
<WeatherApi lat={this.state.latitude} lon={this.state.longitude} />
</View>
		)
}

}

export default Location;
