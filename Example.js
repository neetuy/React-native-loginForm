import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
 
} from 'react-native';

export default class Example extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
        style={styles.input}
        />
        <TextInput
        style={styles.input}
        />
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  },
  input: {
    color: "#fff",
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 20,
    backgroundColor: "rgb(255,255,0.2)"
  }
});