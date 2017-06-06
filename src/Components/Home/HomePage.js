import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
   return (
      <TouchableOpacity style = {{ margin: 128 }}>
         <Text>Home Page</Text>
      </TouchableOpacity>
   )
}

export default Home