import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import { auth } from '../firebase'
import { styles } from '../styles';


function Home({ navigation }) {

  // const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }





    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Book Keeping</Text>
        <Image style={styles.icon}
        source={require("../assets/book-icon.png")}/>

       <TouchableOpacity
          onPress={() => navigation.navigate('Scanner')}
          style={styles.buttonSOOutline}
        >
          <Text style={styles.buttonOutlineText}>Scan A Book</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Favorites')}
          style={styles.buttonSO}
        >
          <Text style={styles.buttonText}>Go To Favorites</Text>
        </TouchableOpacity>

      <Text style={styles.toBottom}>
        Signed in as: {auth.currentUser?.email}
      </Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.buttonSOOutline}
      >
        <Text style={styles.buttonOutlineText}>
          Sign out
        </Text>
      </TouchableOpacity>
      </View>
    );
  }

  export default Home;