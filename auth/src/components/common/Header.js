import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => {
return (
	<View style={styles.container}>
		<Text style={styles.title}>{props.headerTitle}</Text>
	</View>
	)
};

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
	},
	title: {
		fontSize:25,
		marginTop:40,
		paddingBottom:10,
		color: '#FFF'
	}

	})

export { Header };
