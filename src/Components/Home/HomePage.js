// import React from 'react'
// import { TouchableOpacity, Text, View, AsyncStorage } from 'react-native';
// import { Actions } from 'react-native-router-flux';

// const Home = () => {

//     setData = (value) => {
//       AsyncStorage.setItem('email', JSON.stringify(value))
//        AsyncStorage.setItem('password', JSON.stringify(value))
//     }
   
//     getData = (value) => {
//       AsyncStorage.getItem('email').then((value) => {
//         var email = JSON.parse(value); // boolean false
//         alert(email);
//       });
//       AsyncStorage.getItem('password').then((value) => {
//         var password = JSON.parse(value); // boolean false
//         alert(password);
//       });

//     }
//     deleteItem = (value) => {
//       AsyncStorage.removeItem('email').then((value) => {
//           var email = JSON.parse(value); // boolean false
//           alert(email);
//       });
//       AsyncStorage.removeItem('password').then((value) => {
//           var password = JSON.parse(value); // boolean false
//           alert(password);
//       });

//     }
//    return (
//     <View>
//       <View>
//         <TouchableOpacity style = {{ margin: 128 }} onPress={this.getData}>
//            <Text>press</Text>
//         </TouchableOpacity>
//       </View>
//       <View>
//         <TouchableOpacity style = {{ margin: 128 }} onPress={this.deleteItem}>
//            <Text>delet</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//    )
// }

// export default Home

import React from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <View><Text>{data}</Text></View>}
      />
    );
  }
}

export default HomePage;