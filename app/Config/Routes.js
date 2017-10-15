import React from 'react';
import { StyleSheet, Image }from 'react-native';
import { TabNavigator, StackNavigator, TabView } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dashboard from '../components/Dashboard/Dashboard';
import FriendRequest from '../components/Friend/FriendRequest';
import FriendList from '../components/Friend/FriendList';
import Notification from '../components/Notification/Notification';
import Profile from '../components/Profile/Profile';

export const FriendTabs = TabNavigator({
    FriendRequest: {
        screen: FriendRequest,
        navigationOptions: {
            tabBarLabel: 'Requests'
        },
    },

    FriendList: {
        screen: FriendList,
        navigationOptions: {
            tabBarLabel: 'Friends',
        },
    }
},
{
    tabBarPosition: 'top',
    swipeEnabled: true,
    lazyLoad: true,
    animationEnabled: false,
    tabBarOptions: {
        upperCaseLabel : false,
        activeTintColor: '#000',
        inactiveTintColor: '#888',
        labelStyle: {
            fontSize: 14
        },
        style: {
            height: 45,
            backgroundColor: '#f9f9f9'
        },
        indicatorStyle: {
            backgroundColor: "#27ae60",
            height: 2
        }

    }
});

export const Tabs = TabNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({ tintColor }) => (
                <Icon size={18} name="format-list-bulleted"
                    style={[{color: tintColor}]}
                />
            ),
        },
    },

    Friend: {
        screen: FriendTabs,
        navigationOptions: {
            tabBarLabel: 'Friends',
            tabBarIcon: ({ tintColor }) => (
                <Icon size={18} name="people"
                    style={[{color: tintColor}]}
                />
            ),
        },
    },

    Notification: {
        screen: Notification,
        navigationOptions: {
            tabBarLabel: 'Notification',
            tabBarIcon: ({ tintColor }) => (
                <Icon size={18} name="notifications"
                    style={[{color: tintColor}]}
                />
            ),
        },
    },

    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: ({ tintColor }) => (
                <Icon size={18} name="account-circle"
                    style={[{color: tintColor}]}
                />
            ),
        },
    }
},
{
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
        upperCaseLabel : false,
        activeTintColor: '#27ae60',
        inactiveTintColor: '#888',
        labelStyle: {
            fontSize: 10,
            padding: 0,
            margin: 0,
        },
        iconStyle: {
            marginTop: -4
        },
        style: {
            height: 45, 
            position: 'absolute', 
            left: 0, 
            bottom: 0, 
            right: 0,
            backgroundColor: '#f9f9f9'
        },
        showIcon: true,
        renderIndicator: () => null
    }
});



export const Root = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
}, 
{
    mode: 'modal',
    headerMode: 'none'
});