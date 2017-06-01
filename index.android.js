/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Login from './src/Components/Login/Login';
import Index from './app/Index';

const App = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
});

let SQLite = require('react-native-sqlite-storage');

export default class ReactNativeProject extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  const  navigate  = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' });
        }
      />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
  
});

AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);
