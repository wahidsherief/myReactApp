import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/components/Login/Login';
import Dashboard from './app/components/Dashboard/Dashboard';
import {StackNavigator} from 'react-navigation';

const Application = StackNavigator({
        Home: { screen: Login },
        Dashboard: { screen: Dashboard },
    }, {
        navigationOptions: {
            header: true
        }
});

export default class App extends React.Component {
  render() {
    return (
        <Application />
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
