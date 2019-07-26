import React, {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
    apiKey: "AIzaSyB5VEj60BqhJ-gbSSBdq-tekTG1swiXaRM",
    authDomain: "auth-a3af0.firebaseapp.com",
    databaseURL: "https://auth-a3af0.firebaseio.com",
    projectId: "auth-a3af0",
    storageBucket: "auth-a3af0.appspot.com",
    messagingSenderId: "638120881936",
    appId: "1:638120881936:web:57b0c932ae577b36"
  });
		firebase.auth().onAuthStateChanged((user) => {

		})
	}

	render() {
		return (
				<View>
				<Header headerTitle="Authentication" />
					<LoginForm />
				</View>
			)
	}
};

export default App;
