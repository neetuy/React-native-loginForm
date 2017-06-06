/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Alert,
// } from 'react-native';
// import Login from './src/Components/Login/Login';

// // import ReactNativeLogin from './App/components/App';

// class ReactNativeProject extends Component {

	

//   render(){
//     return (
//       <Login
       
//       />
//     );
//   }
// }

// AppRegistry.registerComponent('ReactNativeProject', () =>ReactNativeProject);
import {
  AppRegistry,
  Alert,
} from 'react-native';

import React, { Component } from 'react'
import { View } from 'react-native'
import Login from './src/Components/Login/Login';
import Routes from './src/Components/routes/Routes';

export default class ReactNativeProject extends Component {
   
   render(){
      return(
      	
	            <Login 
	            />

      )
   }
}

	AppRegistry.registerComponent('ReactNativeProject', () =>ReactNativeProject);