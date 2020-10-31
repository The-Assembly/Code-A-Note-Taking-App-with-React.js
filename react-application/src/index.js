import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { firebase } from '@firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpy8zDKh25stxyhIDc6JZ_DJ7zQvwNdgY",
  authDomain: "note-app-d5e86.firebaseapp.com",
  databaseURL: "https://note-app-d5e86.firebaseio.com",
  projectId: "note-app-d5e86",
  storageBucket: "note-app-d5e86.appspot.com",
  messagingSenderId: "524690983895",
  appId: "1:524690983895:web:ccb9f7e5c70e695628d992"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

