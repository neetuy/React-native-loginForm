import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        placeholder='username or email' 
        placeholderTextColor='rgba(255,255,255,0.7)'
        style={styles.input} 
        />
        <TextInput 
        placeholder='password'
        placeholderTextColor='rgba(255,255,255,0.7)'
        secureTextEntry
        style={styles.input} 
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
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