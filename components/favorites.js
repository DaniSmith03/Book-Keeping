import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {db} from '../firebase'





function Favorites({ navigation }) {
  const [book, getBook]=useState(undefined);

const favorites=db.collection('favorites').doc('wBOivivgSYd5efirHYjX')

favorites.get().then((doc) => {
  if (doc.exists) {
    const value=doc.data().title
    console.log("Document data:", doc.data());
    return(getBook(value));
  } 
  
  
  else {
      // doc.data() will be undefined in this case
      console.log("This book doesn't exist!");
  }
}).catch((error) => {
  console.log("Error getting book:", error);
});



    return (
      <View style={styles.container}>
        <Text>{book}</Text>
        <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
}




});




  export default Favorites;