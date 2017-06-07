
import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, AsyncStorage } from 'react-native'
import LoginForm from './LoginForm';
import { Actions } from 'react-native-router-flux'


export default class Login extends Component {
   constructor() {
      super()
      this.state = {
         email: '',
         password: '',
          'data': ''
      }
      // this.submit = this.submit.bind(this);
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
    setData = (value) => {
      AsyncStorage.setItem('someBoolean', JSON.stringify(value))
   }
   getData = (value) => {
      AsyncStorage.getItem('someBoolean', function (err, value) {
       var data = JSON.parse(value); // boolean false
       alert(data);
      });
   }
   submit = () => {
    const goToHome = () => {
      Actions.home()  
    }
     // this.setState({email: text})
     if (this.state.email != 'abc123@gmail.com') {
      alert('wrong email');
    } 
    else{
     goToHome();
    }

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
              data = {this.state.data}
              setData = {this.setData}
              getData = {this.getData}
              submit = {this.submit}
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
    height: 100,
    fontSize: 20
  },
  title: {
    color: '#fff',
    marginTop: 10,
    width: 100,
    textAlign:'center'
  },
})