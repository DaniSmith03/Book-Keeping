import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
import {Image, StyleSheet, ActivityIndicator, FlatList, View, Text } from 'react-native';
import {db} from '../firebase'





function Favorites({ navigation }) {
  const favorites=db.collection('favorites')
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [books, setBooks] = useState([]); // Initial empty array of users

  useEffect(() => {
      const subscriber=favorites
      .onSnapshot((querySnapshot) => {
      const books=[];
      querySnapshot.forEach(documentSnapshot => {
        books.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setBooks(books);
      setLoading(false);
      
    });

    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }







return (
  <FlatList
    data={books}
    renderItem={({ item }) => (
      <View style={styles.container}>
        <Image style={styles.coverArt}
        source={{uri:`https://covers.openlibrary.org/b/id/${item.cover}.jpg`}}/>
        <Text>{item.title}</Text>
      </View>
    )}
  />
);
  }


const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
},
coverArt: {
  width: 100,
  height: 150,
},




});




  export default Favorites;