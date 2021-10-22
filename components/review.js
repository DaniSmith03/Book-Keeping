import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {db} from '../firebase';
import { styles } from '../styles';
import { navigateActionFav } from './nav';





function Review({ route, navigation }) {
  const [book, getBook]=useState(undefined);
  const [artId, getArt]=useState(undefined);
  const [publisher, getPublisher]=useState(undefined);
  const [workId, getWorks]=useState(undefined);
  const [summary, getSummary]=useState("undefined");
  const {isbn}=route.params;
  const bookId=JSON.parse(isbn);
  const favorites=db.collection('favorites')


      // Get Data from API
    const getData=()=>{
      // console.log("this is",{bookId})
    fetch(`https://openlibrary.org/isbn/${bookId}.json`)
    .then(response=> response.json())
    .then((data)=>{
      // console.log((data.works[0]))
      // const Title=data.title;
      // const Publisher=data.publishers[0];
      // const Cover=data.covers[0];
      getBook(data.title)
      getArt(data.covers[0])
      getPublisher(data.publishers[0])
      
    });
  };
  getData();


  //Code below to get Book summary information

  const getWorkId=()=>{
    // console.log("this is",{bookId})
  fetch(`https://openlibrary.org/isbn/${bookId}.json`)
  .then(response=> response.json())
  .then((data)=>
    data.works[0]
  ).then((data)=>{
   getWorks(data.key)
  });

  }
getWorkId();





  const readSummary=()=>{
  fetch(`https://openlibrary.org${workId}.json`)
  .then(response=> response.json())
  .then((data)=>{
    if (typeof data.description==='object'){
      const obj=data.description
      getSummary(obj.value)
    }
    else if(data.description&& typeof data.description!=='object'&& data.description!==null){
    getSummary(data.description)
    }
    else{
      getSummary("No Description Available")
      }


    
  }).catch((error) => {
    console.log("Error getting document:", error);
});
};
readSummary();











  const handleAddFavorite=()=>{
    favorites.doc(`${bookId}`).set({
      title:`${book}`,
      publisher:`${publisher}`,
      cover:artId,
      description:`${summary}`,
    })
    .then(() => {
      navigation.dispatch(navigateActionFav)
      console.log("Document successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });

  }




  return (
      <View style={styles.container}>
        <Text style={styles.isbn} >isbn: {bookId}</Text>
        <Text style={styles.title}>{book}</Text>
        <Image style={styles.bookCover}
        source={{uri:`https://covers.openlibrary.org/b/id/${artId}.jpg`}}/>
        <Text style={styles.maintext}> Publisher: {publisher}</Text>




        <TouchableOpacity
        onPress={() => {handleAddFavorite()}}
        style={styles.buttonSO}
      >
        <Text style={styles.buttonText}>
          Add To Favorites
        </Text>
      </TouchableOpacity>
      </View>
    );
  }

  







  export default Review;