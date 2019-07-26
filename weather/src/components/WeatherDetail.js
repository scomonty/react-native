import React from 'react';
import {Text,View, StyleSheet} from 'react-native';


const WeatherDetail = ({weather}) => {

	return (
<View style={styles.container}>
<Text>{weather.shortForecast}</Text>
<Text>{weather.temperature}&#176;F</Text>
<Text>{weather.windDirection} {weather.windSpeed}</Text>
</View>
		)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop:15,
		shadowColor: '#000',
		shadowOffset: {width:0, height:2},
		shadowOpacity: 0.3,
		elevation:2,
		position:'relative',
		paddingBottom:15
	},
	text: {
		fontSize:18
	}

	})

export default WeatherDetail;
