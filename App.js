// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/home.js';
import Scanner from './components/scanner';
import Profile from './components/profile.js';
import Favorites from './components/favorites.js';
const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Favorites" component={Favorites}/>
      </Stack.Navigator>
      
    
    </NavigationContainer>
  );
}



export default App;