import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

	componentWillMount() {
		firebase.initializeApp({
				apiKey: "AIzaSyB1S7RXO_sYNVOot5lEYeTfBHlGQyMYWhU",
				authDomain: "auth-a5d6b.firebaseapp.com",
				databaseURL: "https://auth-a5d6b.firebaseio.com",
				projectId: "auth-a5d6b",
				storageBucket: "auth-a5d6b.appspot.com",
				messagingSenderId: "499294512749"
		});
	}


	render() {
		return(
			<View>
			<Header headerText='Authentication' />
				<LoginForm />
			</View>	
		);
	}
}

export default App;