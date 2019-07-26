import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	//set state to empty array
	state = {albums:[]};

//make API call once the app has loaded
	componentWillMount() {
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }));
	}

//map through data returned from call add pass props to child AlbumDetail
	renderAlbums() {
		return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
	}

	render() {
return (
		<ScrollView>
			{this.renderAlbums()}
		</ScrollView>
	)
}
}

export default AlbumList;
