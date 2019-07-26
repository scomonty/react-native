// Import libraries to create component
import React from 'react';
import { Text, AppRegistry, ScrollView } from 'react-native';
import WeatherApi from './src/components/WeatherApi';

// Create a component
const App = () => {
return (
	<ScrollView>
		<WeatherApi />
	</ScrollView>
	)
};

// Render to device
AppRegistry.registerComponent('weather', () => App);

