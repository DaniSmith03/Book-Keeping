import React, { useState, useEffect } from 'react';
import {styles} from '../styles';
import {Image, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {db} from '../firebase'
import {navigateActionFav} from './nav';

function bookDetails ({ route, navigation })  {
  const [book, getTitle]=useState(undefined);
  const [artId, getArt]=useState(undefined);
  const [publisher, getPublisher]=useState(undefined);
  const [description, getDescription]=useState(undefined);
  const {isbn}=route.params;
  const bookId=JSON.parse(isbn);
  const id=JSON.stringify(bookId)
  const favorites=db.collection("favorites");
  const docRef=favorites.doc(`${id}`)



  
  
  const getBook=()=>
  docRef.get().then((doc) => {
    if (doc.exists) {

      getTitle(doc.data().title)
      getArt(doc.data().cover)
      getPublisher(doc.data().publisher)
      getDescription(doc.data().description)
        
        console.log("Document data:", doc.data());
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

getBook();




const handleDelete=()=>{


  docRef.delete().then(() => {
    console.log(`book with isbn ${id} successfully deleted`)
    
}).then(navigation.dispatch(navigateActionFav)).catch((error) => {
    console.error("Error removing document: ", error);
});
}










return (
  <View style={styles.container}>
        <Text style={styles.isbn}>isbn: {id}</Text>
        <Text style={styles.title}>{book}</Text>
        <Image style={styles.bookCover}
        source={{uri:`https://covers.openlibrary.org/b/id/${artId}.jpg`}}/>
        <Text style={styles.maintext}>Publisher: {publisher}</Text>
        <ScrollView>
        <Text style={styles.maintext}>Description: {description}</Text>
        </ScrollView>
        <TouchableOpacity
          onPress={handleDelete}
          style={styles.buttonSO}
        >
        <Text style={styles.buttonText}>
          Delete Book
        </Text>
      </TouchableOpacity>
      </View>



  


  
    
)}











export default bookDetails;







