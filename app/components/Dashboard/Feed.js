import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../../Config/data';

export default class Feed extends Component {
  // onLearnMore = (user) => {
  //   this.props.navigation.navigate('Details', { ...user });
  // };

	showAlert() {
		alert('daad');
	}

	render() {
		return (
			<ScrollView>
				{users.map((user) => (
					<TouchableOpacity style={styles.feedContainer} onPress={this.showAlert}>
						<View style={styles.feedItem}>
							<Image
						    	source={require('../../images/user.jpeg')}
						    	style={styles.userImage}
						    />
						    <View style={styles.userInfo}>
								<Image
							    	source={require('../../images/emoticons/happy.png')}
							    	style={styles.moodImage}
							    />
							    <View style={styles.userInfoText}>
								    <Text style={styles.title}>Wahidul Alam</Text>
								    <Text style={styles.feeling}>Feeling 
								    	<Text style={styles.mood}> Happy</Text>
								    </Text>
							    </View>
							    <View style={styles.postTime}>
									<Text style={styles.time}>2min</Text>
							    </View>
						    </View>
					    </View>
					</TouchableOpacity>
				))}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	feedContainer: {
		flex: 1
	},

	feedItem: {
		flexDirection: "row",
		marginRight: 0,
		marginLeft: 15,
		marginTop: 2,
		marginBottom: 2
	},

	userImage: {
		width: 40,
		height: 40,
		marginTop: 7,
		borderRadius: 50
	},

	moodImage: {
		width: 25,
		height: 25,
		marginTop: 5
	},

	userInfo: {
		flex: 1,
		marginLeft: 15,
		borderBottomWidth: 1,
		borderColor: '#eee',
		flexDirection: "row",
		padding: 10,
		paddingLeft: 0
	},

	userInfoText: {
		flex: 1,
		marginLeft: 10,
		flexDirection: "column"
	},

	title: {
		fontWeight: '700',
		color: "#333"
	},

	feeling: {
		color: "#999"
	},

	mood: {
		color: "green"
	},

	postTime: {
		marginTop: 5,
		textAlign: "right"
	},

	time: {
		color: "#ccc"
	}
});