import React from 'react';
import {Text,View, StyleSheet} from 'react-native';

const LocationDetail = ({location}) => {
	return (
<View style={styles.container}>
<Text style={styles.text}>{location.city}, {location.state}</Text>
</View>
		)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#7AA8FF',
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

export default LocationDetail;
