
import firebase from 'firebase';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase'

const config = {
  apiKey: "AIzaSyCpPngCFg9Tbf101snu0YHU-7hIvaRvoxc",
  authDomain: "techresumeio.firebaseapp.com",
  databaseURL: "https://techresumeio.firebaseio.com",
  projectId: "techresumeio",
  storageBucket: "techresumeio.appspot.com",
  messagingSenderId: "101867941708"
};


  const _firebase = firebase.initializeApp(config)
  
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fireStoreProvider=new firebase.firestore();
  const reduxSagaFirebase = new ReduxSagaFirebase(_firebase)

export { _firebase, facebookProvider,googleProvider,fireStoreProvider,reduxSagaFirebase };
