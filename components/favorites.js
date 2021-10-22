import React, { useState, useEffect } from 'react';
import {styles} from '../styles';
import {Image, ActivityIndicator, FlatList, View, Text, TouchableHighlight} from 'react-native';
import {db} from '../firebase'
import {navigateActionHome} from './nav';






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

  const done =()=>{
    if (setLoading===false){
      navigation.dispatch(navigateActionHome)
    }
    
    
  };
  done();


  

  





return (
  <FlatList
   columnWrapperStyle={{justifyContent: 'space-around'}}
   numColumns={2}
    data={books}
    renderItem={({ item }) => (
      <TouchableHighlight style={styles.touch}
        onPress={()=>navigation.navigate('BookDetails',{isbn:item.key})}>
      <View style={styles.container}>
        <Image style={styles.coverArt}
        source={{uri:`https://covers.openlibrary.org/b/id/${item.cover}.jpg`}}/>
        {/* <Text style={styles.title}>{item.title}</Text> */}
      </View>
      </TouchableHighlight>
    )}
  />
);
  }





  export default Favorites;