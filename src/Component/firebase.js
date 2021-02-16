import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC2L-_PhKkiuw-BrhD-tj0gvctVzPOvLtc',
  authDomain: 'facebook-clone-14633.firebaseapp.com',
  projectId: 'facebook-clone-14633',
  storageBucket: 'facebook-clone-14633.appspot.com',
  messagingSenderId: '364386919992',
  appId: '1:364386919992:web:9e5d2edd2971f62ad2e8cd',
  measurementId: 'G-G7JN3K3QDX',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
