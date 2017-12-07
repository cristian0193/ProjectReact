import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyDSJm0UPSMuvVD2r5wvZ7o4MdlRd09X-MQ",
    authDomain: "pseudogram-web.firebaseapp.com",
    databaseURL: "https://pseudogram-web.firebaseio.com",
    projectId: "pseudogram-web",
    storageBucket: "pseudogram-web.appspot.com",
    messagingSenderId: "800480795994"
});

ReactDOM.render(
  <App />,
  document.getElementById('root'));
registerServiceWorker();
