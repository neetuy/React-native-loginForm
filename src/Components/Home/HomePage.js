import React from 'react'
import { TouchableOpacity, Text, View, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {

    setData = (value) => {
      AsyncStorage.setItem('email', JSON.stringify(value))
       AsyncStorage.setItem('password', JSON.stringify(value))
    }
   
    getData = (value) => {
      AsyncStorage.getItem('email').then((value) => {
        var email = JSON.parse(value); // boolean false
        alert(email);
      });
      AsyncStorage.getItem('password').then((value) => {
        var password = JSON.parse(value); // boolean false
        alert(password);
      });

    }
    deleteItem = (value) => {
      AsyncStorage.removeItem('email').then((value) => {
          var email = JSON.parse(value); // boolean false
          alert(email);
      });
      AsyncStorage.removeItem('password').then((value) => {
          var password = JSON.parse(value); // boolean false
          alert(password);
      });

    }
   return (
    <View>
      <View>
        <TouchableOpacity style = {{ margin: 128 }} onPress={this.getData}>
           <Text>press</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style = {{ margin: 128 }} onPress={this.deleteItem}>
           <Text>delet</Text>
        </TouchableOpacity>
      </View>
    </View>
   )
}

export default Home