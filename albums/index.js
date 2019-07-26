// Import libraries to create component
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => {
return (
	<View style={{flex:1}}>
		<Header headerTitle="Albums" />
		<AlbumList />
	</View>
	)
};

// Render to device
AppRegistry.registerComponent('albums', () => App);
