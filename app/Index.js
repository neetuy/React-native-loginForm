import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Navigator</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Navigation</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    padding: 20
  },
  input:{
    height:40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 40,
    paddingHorizontal: 10,
    fontSize: 18
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText:{
    textAlign: 'center',
    color: '#fff',
    fontWeight: '800'
  }
});