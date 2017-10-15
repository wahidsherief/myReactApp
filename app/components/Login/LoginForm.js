import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import Root from '../../Config/Routes';

export default class LoginForm extends React.Component {

	
	onButtonPress = () => {
		const { navigate } = this.props.navigation;
		navigate('Root');
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput underlineColorAndroid="transparent" 
						   style={styles.input} 
						   placeholder="username or email" 
						   placeholderTextColor='rgba(255,255,255,0.5)'
						   returnKeyType="next"
						   keyboardType="email-address"
						   autoCapitalize="none"
						   autoCorrect={false}
						   onSubmitEditing={() => this.passwordInput.focus()}>
				</TextInput>

				<TextInput underlineColorAndroid="transparent" 
						   style={styles.input} 
						   placeholder="password" 
						   placeholderTextColor='rgba(255,255,255,0.5)'
						   returnKeyType='go'
						   ref={(input) => this.passwordInput = input}
						   secureTextEntry> 
				</TextInput>

				<TouchableOpacity style={styles.buttonContainer}
								  onPress={this.onButtonPress}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},

	input: {
		height: 40,
		marginBottom: 15,
		backgroundColor: 'rgba(255,255,255,0.2)',
		paddingHorizontal: 10,
		width: 300
	},

	buttonContainer: {
		backgroundColor: '#888',
		paddingVertical: 10
	},

	buttonText: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: '700'
	}
});