import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { List, ListItem, Badge } from 'react-native-elements';
import { users } from '../../Config/data';
import Icon from 'react-native-vector-icons/Ionicons';

export default class FriendRequest extends Component {
  // onLearnMore = (user) => {
  //   this.props.navigation.navigate('Details', { ...user });
  // };

	accpetRequest() {
		alert('request accepted');
	}

	cancelRequest() {
		alert('request cancelled');
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.topBar}>
					<Text>Your Friend Requests</Text>
					<Badge style={styles.badge}>
						<Text style={styles.badgeText}>15</Text>
					</Badge>
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
									<TouchableOpacity onPress={this.accpetRequest}>
										<Icon style={styles.acceptButton} size={50} name="ios-checkmark-circle-outline"></Icon>
										<Text style={styles.acceptButtonText}>Accept</Text>
									</TouchableOpacity>
									<TouchableOpacity onPress={this.cancelRequest}>
										<Icon style={styles.cancelButton} size={50} name="ios-close-circle-outline"></Icon>
										<Text style={styles.cancelButtonText}>Cancel</Text>
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
		flexDirection: "row"
	},

	badge: {
		width: 20,
		height: 20,
		padding: 2,
		backgroundColor: "#e74c3c",
		marginLeft: 3,
		borderRadius: 50
	},

	badgeText: {
		textAlign: 'center',
		color: "#fff",
		marginTop: 2,
		fontSize: 10
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
		flex: 1.7,
		flexDirection: "row",		
		paddingTop: 15
	},

	acceptButton: {
		color: "#8fb9fc",
	},

	cancelButton: {
		color: "#ff8a59",
		marginLeft: 15
	},

	acceptButtonText: {
		color: "#999",
		fontSize: 12,
		marginLeft: 3,
	},

	cancelButtonText: {
		color: "#999",
		marginLeft: 20,
		fontSize: 12
	}
});