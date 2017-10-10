import React from 'react';
import { StyleSheet, View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Dashboard extends React.Component {

	onMoodPress(mood, exp) {
		alert(exp);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>Share Your Mood</Text>
				<ScrollView style={styles.moodsContainer} horizontal={true}>
					<TouchableOpacity onPress={this.onMoodPress.bind(this, 'mood1', 'exp1')} style={styles.mood1}></TouchableOpacity>
					<TouchableOpacity onPress={this.onMoodPress.bind(this, 'mood2', 'exp2')} style={styles.mood1}></TouchableOpacity>
					<TouchableOpacity onPress={this.onMoodPress.bind(this, 'mood3', 'exp3')} style={styles.mood3}></TouchableOpacity>
					<TouchableOpacity onPress={this.onMoodPress.bind(this, 'mood4', 'exp4')} style={styles.mood4}></TouchableOpacity>
					<TouchableOpacity onPress={this.onMoodPress.bind(this, 'mood5', 'exp5')} style={styles.mood5}></TouchableOpacity>
					<TouchableOpacity onPress={this.onMoodPress.bind(this, 'mood6', 'exp6')} style={styles.mood6}></TouchableOpacity>
				</ScrollView>
		  	</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},

	headerText: {
		textAlign: 'center',
	},

	moodsContainer: {
		flexDirection: "row",
		height: 50,
	},

	mood1: {
		backgroundColor: '#333',
		padding: 10,
		margin: 4,
		borderRadius:4,
		width: 150,
		height: 200
	},

	mood2: {
		backgroundColor: '#222',
		padding: 10,
		margin: 4,
		borderRadius:4,
		width: 150,
		height: 200
	},

	mood3: {
		backgroundColor: '#676',
		padding: 10,
		margin: 4,
		borderRadius:4,
		width: 150,
		height: 200
	},

	mood4: {
		backgroundColor: '#f8f8f8',
		padding: 10,
		margin: 4,
		borderRadius:4,
		width: 150,
		height: 200
	},

	mood5: {
		backgroundColor: '#e3e',
		padding: 10,
		margin: 4,
		borderRadius:4,
		width: 150,
		height: 200
	},

	mood6: {
		backgroundColor: '#122',
		padding: 10,
		margin: 4,
		borderRadius:4,
		width: 150,
		height: 200
	}
});
