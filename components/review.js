import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

function Review({ route, navigation }) {
  const [book, getBook]=useState(undefined);
  const [artId, getArt]=useState(undefined);
  const [publisher, getPublisher]=useState(undefined);
  const {isbn}=route.params;
  const bookId=JSON.parse(isbn);
      // Get Data from API
    const getData=()=>{
    fetch(`https://openlibrary.org/isbn/${bookId}.json`)
    .then(response=> response.json())
    .then((data)=>{
      // console.log(data)
      // const Title=data.title;
      // const Publisher=data.publishers[0];
      // const Cover=data.covers[0];
      getBook(data.title)
      getArt(data.covers[0])
      getPublisher(data.publishers[0])
      
    });
  };
  getData();



  return (
      <View style={styles.container}>
        <Text>Review Scan</Text>
        <Text>isbn: {bookId}</Text>
        <Text style={styles.maintext}>{book}</Text>
        <Image style={styles.coverArt}
        source={{uri:`https://covers.openlibrary.org/b/id/${artId}.jpg`}}/>
        <Text style={styles.maintext}>{publisher}</Text>




        <Button
        title="Add To Favorites"
        onPress={() => navigation.navigate('Favorites')}
      />
      </View>
    );
  }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: 'yellow'
  },
  coverArt: {
    width: 100,
    height: 150,
  },
});






  export default Review;