import React from 'react';
import { StyleSheet, View } from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Navigation extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<BottomNavigation
			        labelColor="white"
			        rippleColor="white"
			        style={{ height: 45, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
			        >
			        <Tab
						barBackgroundColor="#00796B"
						label="Feed"
						icon={<Icon size={24} color="white" name="format-list-bulleted" />}
			        />
        			<Tab
						barBackgroundColor="#37474F"
						label="Friends"
						icon={<Icon size={24} color="white" name="people" />}
					/>
					<Tab
						barBackgroundColor="#5D4037"
						label="Notifications"
						icon={<Icon size={24} color="white" name="notifications" />}
					/>
					<Tab
						barBackgroundColor="#3E2723"
						label="Profile"
						icon={<Icon size={24} color="white" name="person" />}
					/>
      			</BottomNavigation>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	}
});