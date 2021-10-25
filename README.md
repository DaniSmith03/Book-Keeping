# Pokedex Demo
DigitalCrafts React Project


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Book-Keeping-Logo](assets/book-icon.png)](projectLink)

Enjoy this book keeping application to store your next reads in a convenient easy to access, easy to store place. No pencils, pens, or paper needed.
This application was built as a need for every responsible book lover with too many book covers lost in their camera roll. Also for anyone who has ever seen an interesting book and never gotten to read it for not remebering the book name. Store book information here in this easy to use book library. 

Current Features:

* Authenticated login - Secure sign in for access to your book list, for anyone who likes to keep their reading list private.  
* Book Scanner - After giving the application camera access to your phone, scan book ISBN's and store "favorite" them to a a database for retrieval later.  
*Database CRUD operations- Store books you have scanned to your favorites list, access books you have favorited in your favorites list with details a short refresher summary. Remove books you have saved when you no longer need to keep them or have read them already. 

 

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

* [Expo](https://docs.expo.dev/)
* [React Native](https://reactnative.dev/)
* [React Natvigation](https://reactnative.dev/)
* [Firebase](https://firebase.google.com/)



<!-- GETTING STARTED -->
## Getting Started

Getting started, you'll want to install the expo command command line tools,"npm install --global expo-cli". Install the mobile or computer simulator to run and test the application on (https://docs.expo.dev/get-started/installation/).Create an expo react native application "expo init my-project". Once complete you will need pull the image files from the github repo (/asseets). Once these are all set up install the required modules.

### Prerequisites

* Expo Command Line Tools
  ```sh
  npm install --global expo-cli

* Create React App
  ```sh
  expo init "my-appname"
  ```
* Firebase install 
  ```sh
  expo install firebase

* Firebase Auth
  ```sh
  expo init firebase-auth

* Firebase Firestore
  ```sh
  yarn add @react-native-firebase/firestore

* React Navigation
  ```sh
  expo install react-native-screens react-native-safe-area-context

  Expo Barcode Scanner
  ```sh
  expo install expo-barcode-scanner

  

### Installation


1. Create React App
  ```sh
  expo init "my-appname"
   ```
2. 
3. Install expo packages
   ```sh
   npm install 
   ```
4. Copy necessary files from the repo
   ```git
   git clone https://github.com/DaniSmith03/Book-Keeping
  ```

<!-- USAGE EXAMPLES -->
## Usage

This code can be used as a base for a book keeping application that may be good to use for the avid or casual book shopper, Classroom or personal book inventory or simply for for anyone looking to practice their react native and firebase implementation skills. 



<!-- ROADMAP -->
## Roadmap

Planned future updates:

* Add Friends- Add Friends and view their book inventory. 
* Share Books- Share books amongst in app friends or export a book reccomendation from your app library. 
* Purchase book- Links that direct you to where you can purchase an an audio/e-book, or paper version of the book online.
*Location tracking- Keep track of where you spotted a particular book for reference on getting it again.
*Read/Unread - Mark books in your library as read or unread.  


Known Bugs

* Site will throw an error if the book scanned is not found in the Open Library API.


<!-- CONTRIBUTING -->
## Contributing

This project is currently closed for contributions but feel free to clone this repo and build something awesome of your own!



<!-- CONTACT -->
## Contact

Dani Smith  - (https://github.com/danismith03) - DaniSmith.codes  

Project Link: [https://github.com/DaniSmith03/Book-Keeping](https://github.com/DaniSmith03/Book-Keeping) | 



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Git Cheat Sheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)
* [Code Palace](https://www.youtube.com/watch?v=LtbuOgoQJAg)
* [Made With Matt](https://www.youtube.com/watch?v=ql4J6SpLXZA&t=23s)
* [Open Library API](https://openlibrary.org/dev/docs/api/books)
* [Digital Craft](https://www.digitalcrafts.com/)