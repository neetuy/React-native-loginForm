import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
 
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require("../../images/logo.png")}
          />
          <Text style={styles.title}>Login Page</Text>
        </View>
        <View style={styles.formContainer}>
        <LoginForm />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#3498db', 
  },
  logoContainer: {
    flexGrow:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#fff',
    marginTop: 10,
    width: 100,
    textAlign:'center'
  },
  formContainer: {

  }
});