import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBsjOfSSqjd8pZxLZqSEff6sO8J37PCky8",
  authDomain: "miljulkar-d0222.firebaseapp.com",
  projectId: "miljulkar-d0222",
  storageBucket: "miljulkar-d0222.appspot.com",
  messagingSenderId: "397453023108",
  appId: "1:397453023108:web:0cf955de16e9c9aaea2fd1",
  measurementId: "G-PE1BY9S80Z"

  };
 
 const firebaseApp= firebase.initializeApp(firebaseConfig);
 const db =firebaseApp.firestore();
 const auth =  firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 const storage = firebase.storage();

 export {auth,provider,storage};
 export default db;