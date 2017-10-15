import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { List, ListItem, Badge } from 'react-native-elements';
import { users } from '../../Config/data';
import Icon from 'react-native-vector-icons/Ionicons';

export default class FriendList extends Component {
  // onLearnMore = (user) => {
  //   this.props.navigation.navigate('Details', { ...user });
  // };

	unfriend() {
		alert('unfriend done');
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.topBar}>
					<Text>Your Friend List</Text>
				</View>
				<ScrollView>
					{users.map((user) => (
						<View style={styles.requestContainer}>
							<View style={styles.feedItem}>
								<Image
							    	source={require('../../images/user.jpeg')}
							    	style={styles.userImage}
							    />
							    <View style={styles.userInfo}>
								    <Text style={styles.title}>Wahidul Alam</Text>
								    <Text style={styles.subtitle}>
								    	Tsinghua University
								    </Text>
							    </View>
							    <View style={styles.buttons}>
									<TouchableOpacity onPress={this.unfriend}>
										<Icon style={styles.cancelButton} size={50} name="ios-close-circle-outline"></Icon>
										<Text style={styles.cancelButtonText}>Unfriend</Text>
									</TouchableOpacity>
							    </View>
						    </View>
						</View>
					))}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	mainContainer: {
		marginBottom: 70,
	},

	topBar: {
		padding: 15,
		flexDirection: "row",
	},

	requestContainer: {
		flex: 1,
		marginBottom: 5,
		height: 100,
		backgroundColor: "#fff"
	},

	feedItem: {
		flexDirection: "row",
		marginRight: 0
	},

	userImage: {
		width: 100,
		height: 100
	},

	userInfo: {
		flex: 2,
		marginLeft: 8,
		marginTop: 15,
		flexDirection: "column",
		padding: 10,
		paddingLeft: 0
	},

	title: {
		fontSize: 16,
		color: "#333"
	},

	subtitle: {
		color: "#999"
	},

	buttons: {
		flex: 0.7,
		flexDirection: "row",		
		paddingTop: 15
	},

	cancelButton: {
		color: "#ff8a59"
	},

	cancelButtonText: {
		color: "#999",
		fontSize: 12
	}
});