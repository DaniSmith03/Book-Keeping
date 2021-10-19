import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'


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
        <Text>Hello from Home Screen</Text>
        <Button
        title="Scan A Book"
        onPress={() => navigation.navigate('Scanner')}
      />
      <Button
        title="View Favorites"
        onPress={() => navigation.navigate('Favorites')}
      />

      <Text>
        Email: {auth.currentUser?.email}
      </Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Sign out
        </Text>
      </TouchableOpacity>
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
button: {
  backgroundColor: '#ffbf00',
  width: '60%',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: 50,
  top:150,
},
buttonText: {
  color: 'white',
  fontWeight: '700',
  fontSize: 16,
},




});




  export default Home;