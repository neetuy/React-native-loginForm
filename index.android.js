
import {
  AppRegistry,
  Alert,
} from 'react-native';

import React, { Component } from 'react'
import { View } from 'react-native'
import Login from './src/Components/Login/Login';
import HomeContainer from './src/Components/Home/HomeContainer';
import Routes from './src/Components/routes/Routes';

export default class ReactNativeProject extends Component {
   
   render(){
      return(
	            // <Login />
              <Routes />
      )
   }
}

	AppRegistry.registerComponent('ReactNativeProject', () =>ReactNativeProject);


