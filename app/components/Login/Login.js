import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {

	render() {
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<View style={styles.logoContainer}>
					<Image source={require('../../images/logo.png')}
						   style={styles.logo}
					/>
				</View>
				<Text style={styles.title}>Share Emotions Instantly..</Text>
				<View style={styles.formContainer}>
					<LoginForm navigation={this.props.navigation}></LoginForm>
				</View>
		  	</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#bdc3c7',
		alignItems: 'center',
		justifyContent: 'center',
	},

	logoContainer: {
		alignItems: 'center',
		justifyContent: 'center'
	},

	logo: {
		width: 70,
		height: 70
	}
});