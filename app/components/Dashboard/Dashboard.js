import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Mood from './Mood';
import Feed from './Feed';
import Navigation from './Navigation';


export default class Dashboard extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>Your Mood</Text>
				<Mood />
				<Feed />
      			<Navigation />
		  	</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	},

	headerText: {
		textAlign: 'center',
		margin: 10,
		fontSize: 20,
		fontWeight: '700'
	}
});
