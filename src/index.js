import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBj0Q0dwWrofr_rkO70pW12ly5OeMtGxqQ",
  authDomain: "todo-app-23afc.firebaseapp.com",
  databaseURL: "https://todo-app-23afc.firebaseio.com",
  projectId: "todo-app-23afc",
  storageBucket: "todo-app-23afc.appspot.com",
  messagingSenderId: "865882328876"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />, document.getElementById('root')
  );
