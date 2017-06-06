
import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import LoginForm from './LoginForm';

export default class Login extends Component {
   constructor() {
      super()
      this.state = {
         email: '',
         password: ''
      }
   }
   updateEmail = (text) => {
      this.setState({email: text})
   }
   updatePassword = (text) => {
      this.setState({password: text})
   }
   login = () => {
      alert('email: ' + this.state.email + ' password: ' + this.state.password)
   }
     goToHome = () => {
      Actions.home()
   }
   render(){
      return(
        <View style={styles.wrapper}>
          <View style={styles.logoContainer}>
            <Image 
              style={styles.logo}
              source={require("../../images/logo.png")}
            />
            <Text style={styles.title}>Login Page</Text>
          </View>
          <View>
            <LoginForm
               updateEmail = {this.updateEmail}
               updatePassword = {this.updatePassword}
               login = {this.login}
               goToHome ={this.gotoHome}

            />
          </View>  
        </View>
      )
   }
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      padding: 23

   },
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
})