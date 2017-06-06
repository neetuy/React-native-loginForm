import React, { Component } from 'react'

import {
   View,
   Text,
   TouchableHighlight,
   TextInput,
   StyleSheet
} from 'react-native'

export default LoginForm = (props) => {
   return (
      <View style = {styles.container}>
         <TextInput
            style = {styles.input}
            placeholder = 'Email'
            autoCapitalize = 'none'
            onChangeText = {props.updateEmail}
         />
         <TextInput
            style = {styles.input}
            placeholder = 'Password'
            autoCapitalize = 'none'
            onChangeText = {props.updatePassword}
         />
         <TouchableHighlight
            style = {styles.buttonContainer}
            onPress = { () => props.login(props.email, props.password)}>
            <Text style = {styles.buttonText}>
               Submit
            </Text>
         </TouchableHighlight>
      </View>
   )
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

