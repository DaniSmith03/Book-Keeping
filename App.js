// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/login.js';
import Home from './components/home.js';
import Scanner from './components/scanner';
import BookDetails from './components/bookDetails.js';
import Favorites from './components/favorites.js';
import Review from './components/review.js'; 
const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
        <Stack.Screen name="Favorites" component={Favorites}/>
        <Stack.Screen name="Review" component={Review}/>
      </Stack.Navigator>
      
    
    </NavigationContainer>
  );
}



export default App;