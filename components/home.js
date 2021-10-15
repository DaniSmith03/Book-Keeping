import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Hello from Home Screen</Text>
        <Button
        title="Go to Scanner"
        onPress={() => navigation.navigate('Scanner')}
      />
      <Button
        title="Profile"
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




  export default Home;