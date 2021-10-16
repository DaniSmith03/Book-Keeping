import axios from 'axios';
import React from 'react';

const getBooks=(props)=>{
    const {params}=match;
    const {bookISBN}=params;
    const[book, setBook]= useState(undefined);


axios.get(`https://openlibrary.org/isbn/${bookISBN}`)
.then(function(response){
    const {data} = response;
    setBook(data);
    console.log(setBook);
  })
  .catch(function(error){
    setBook(false);
  });
}









export default getBooks;