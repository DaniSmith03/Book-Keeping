import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')
  const [book, getBook]=useState(undefined);
  const [artId, getArt]=useState(undefined);
  const [publisher, getPublisher]=useState(undefined);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

   // What happens when we scan the bar code
   const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)

    // Get Data from API
    fetch(`https://openlibrary.org/isbn/${data}.json`)
    .then(response=> response.json())
    .then((data)=>{
      const Title=data.title;
      const Publisher=data.publishers[0];
      const Cover=data.covers[0];
      getBook(Title)
      getArt(Cover)
      getPublisher(Publisher)

      console.log(`Title:${Title} + Cover:${Cover}`);
    });


    // console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

   // Return the View
   return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      <Text style={styles.maintext}>{book}</Text>
      <Image style={styles.coverArt}
      source={{uri:`https://covers.openlibrary.org/b/id/${artId}.jpg`}}/>
      <Text style={styles.maintext}>{publisher}</Text>
      

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
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

export default Scanner;



