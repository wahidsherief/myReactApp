import Expo from 'expo';
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Root } from './app/Config/Routes';
import Login from './app/components/Login/Login';

const Application = StackNavigator({
        Home: { screen: Login },
        Root: { screen: Root }
    },{
    navigationOptions: 
    {
        header: true
    }
});

export default class App extends Component {
  render() {
    return <Application />;
  }
}