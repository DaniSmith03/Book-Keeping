import React, { useState, useEffect } from 'react';
import {Image, StyleSheet, ActivityIndicator, FlatList, View, Text } from 'react-native';


export const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
},
coverArt: {
  width: 150,
  height: 200,
  marginTop:50,
  borderColor:'black',
  borderWidth: 1,

},

touch:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:0,
    margin:0,
},

title:{
    marginTop:20,
},

h1: {
    fontSize: 40,
    alignSelf:'center',
    top: -70
},
icon: {
   alignSelf:'center',
   top: -50
  },
inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 250,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#ffbf00',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#ffbf00',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#ffbf00',
    fontWeight: '700',
    fontSize: 16,
  },
  toBottom:{
    top:200,

  },
  buttonSO: {
    backgroundColor: '#ffbf00',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
    marginBottom:30,
    
  },
  buttonSOOutline: {
    backgroundColor: 'white',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    borderColor: '#ffbf00',
    borderWidth: 2,
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    backgroundColor: 'yellow',
    borderColor:'#ffbf00',
    borderStyle:'solid',
    borderWidth:5,
  },

// BookDetails

bookCover:{
  width: 300,
  height: 350,
  marginTop:50,
  borderColor:'black',
  borderWidth: 1,

},
title:{
    marginTop:30,
    textDecorationLine:'underline',
    fontWeight:'bold',
    fontSize:30,

},
isbn:{
    top:100,

},












});