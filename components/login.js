import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles'
import {Text, View, KeyboardAvoidingView, TouchableOpacity, Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {auth} from '../firebase'
const Login = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])




    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
          })
          .catch(error => alert(error.message))
      }
    const handleLogin=()=>{
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
          })
          .catch(error => alert(error.message))
      }
    


    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>
            <Text style={styles.h1}>Book Keeping</Text>
        <Image style={styles.icon}
        source={require("../assets/book-icon.png")}/>
            <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text=>setEmail(text)}
            style={styles.input}
            />
            <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text=>setPassword(text)}
            style={styles.input}
            secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    )
}

export default Login

