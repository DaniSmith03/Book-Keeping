import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Favorites({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Hello from Favorites Screen</Text>
        <Button
        title="Back to Profile"
        onPress={() => navigation.navigate('Profile')}
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