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
import Example from './Example';
import Login from './src/Components/Login/Login'
export default class ReactNativeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
       
        <Example />
        <Login />
      </View>
    );
  }
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
