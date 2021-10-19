import React from 'react';
// import { firebase } from '../../firebase/config'
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Favorites({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Hello from Favorites Screen</Text>
        <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
}




});




  export default Favorites;