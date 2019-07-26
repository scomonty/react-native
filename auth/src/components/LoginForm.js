import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
state = { email: '', password: '', error: '', loading: false };

onButtonPress() {
	//destructure state for email & password
	const {email, password} = this.state;
	//clear out error state when pressing button & show spinner
	this.setState({error:'', loading: true});

	firebase.auth().signInWithEmailAndPassword(email, password)
	.then( this.onLoginSuccess.bind(this) )
	.catch(() => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then( this.onLoginSuccess.bind(this) )
		.catch(this.onLoginFail.bind(this) )
	})
}

onLoginFail() {
	this.setState({ error: 'Authentication Failed', loading: false})
}

onLoginSuccess() {
	this.setState({email: '', password: '', error: '', loading: false })
}

renderButton() {
	// logic to show submit button or load spinner
	if(this.state.loading) {
		return <Spinner size='small' />
	}
	return (
		<Button press={this.onButtonPress.bind(this)}>Log In</Button>
	)
}

	render() {
		return (
			<Card>

				<CardSection>
					<Input
					label="Email:"
					placeholder="user@gmail.com"
					value={this.state.email}
					onChangeText={ email => this.setState({email}) } />
				</CardSection>

				<CardSection>
				<Input
					secureTextEntry //list prop and will show up as true
					label="Password:"
					placeholder="password"
					value={this.state.password}
					onChangeText={ password => this.setState({password}) } />
				</CardSection>
				<Text style={styles.errorTextStyle}>{this.state.error}</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>

			</Card>
			)
	}
}

const styles = {
	errorTextStyle: {
		fontSize:20,
		alignSelf: 'center',
		color:'red'
	}
}

export default LoginForm;
