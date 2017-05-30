import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
 
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View >
          <Image 
            style={styles.logo}
            source={require("../../images/logo.png")}
          />
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
  logo: {
    width: 100,
    height: 100
  }
});