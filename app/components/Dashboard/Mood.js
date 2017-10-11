import React from 'react';
import { Image, StyleSheet, View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';


export default class Mood extends React.Component {

	onPressLearnMore() {
		alert('bingo');
	}

	onMoodPress(mood, exp) {
		alert(exp);
	}

	render() {
		return (
			<View>
				<View style={styles.moodsContainer}>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<TouchableOpacity onPress={this.onMoodPress.bind(this, 'mood1', 'exp1')} style={styles.mood1}>
							<Image style={styles.emo} source={require('../../images/emoticons/smile.png')}/>
							<Text style={styles.emoText}>Funny</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.onMoodPress.bind(this, 'mood2', 'exp2')} style={styles.mood1}>
							<Image style={styles.emo} source={require('../../images/emoticons/happy.png')}/>
							<Text style={styles.emoText}>Happy</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.onMoodPress.bind(this, 'mood3', 'exp3')} style={styles.mood3}>
							<Image style={styles.emo} source={require('../../images/emoticons/love.png')}/>
							<Text style={styles.emoText}>Loved</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.onMoodPress.bind(this, 'mood4', 'exp4')} style={styles.mood4}>
							<Image style={styles.emo} source={require('../../images/emoticons/shocked.png')}/>
							<Text style={styles.emoText}>Shocked</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.onMoodPress.bind(this, 'mood5', 'exp5')} style={styles.mood5}>
							<Image style={styles.emo} source={require('../../images/emoticons/sad.png')}/>
							<Text style={styles.emoText}>Sad</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.onMoodPress.bind(this, 'mood6', 'exp6')} style={styles.mood6}>
							<Image style={styles.emo} source={require('../../images/emoticons/thinking.png')}/>
							<Text style={styles.emoText}>Thoughtfull</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>

				<View>
					<TouchableOpacity onPress={this.onPressLearnMore} style={styles.shareButton}>
						<Text style={styles.buttonText}>Share Now</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	moodsContainer: {
		flexDirection: "row",
		marginBottom:0,
	},

	mood1: {
		backgroundColor: '#1abc9c',
		padding: 10,
		margin: 4,
		borderRadius:4,
		width: 150,
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
	},

	mood2: {
		backgroundColor: '#3498db',
		padding: 10,
		margin: 4,
		borderRadius:4,
		width: 150,
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
	},

	mood3: {
		backgroundColor: '#9b59b6',
		padding: 10,
		margin: 4,
		borderRadius:4,
		width: 150,
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
	},

	mood4: {
		backgroundColor: '#e74c3c',
		padding: 10,
		margin: 4,
		borderRadius:4,
		width: 150,
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
	},

	mood5: {
		backgroundColor: '#e67e22',
		padding: 10,
		margin: 4,
		borderRadius:4,
		width: 150,
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
	},

	mood6: {
		backgroundColor: '#f39c12',
		padding: 10,
		margin: 4,
		borderRadius:4,
		width: 150,
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
	},

	emo: {
		width: 70,
		height: 70,
	},

	emoText: {
		color: "#fff",
		fontWeight: '100',
		fontSize: 16,
		marginTop: 10
	},

	shareButton: {
		height: 40,
		marginRight: 15,
		marginLeft: 15,
		marginTop: 10,
		marginBottom: -5,
		borderRadius: 5,
		backgroundColor: '#999',
	},

	buttonText: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: '700',
		marginTop: 10,
		fontSize: 15
	},
});