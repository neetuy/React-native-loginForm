/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var React = require('react-native');
var SQLite = require('react-native-sqlite-storage')

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './src/Components/Login/Login'


export default class ReactNativeProject extends Component {

  constructor(props) {
    super(props)
    this.state = {
      record: null
    }
                                                                                              
    let db = SQLite.openDatabase({name: 'example.db', createFromLocation : "~example.openDatabase", location: 'Library'}, this.openCB, this.errorCB);
    console.log(db);
  }

  render() {
    return (
      <Login />
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
