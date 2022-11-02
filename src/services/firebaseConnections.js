import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: 'AIzaSyD6jeceIF5gvL_jCa6EX3ukd-cm0TzKDu0',
  authDomain: 'chamado-7dc79.firebaseapp.com',
  projectId: 'chamado-7dc79',
  storageBucket: 'chamado-7dc79.appspot.com',
  messagingSenderId: '711452951060',
  appId: '1:711452951060:web:334c861e00169de57e1d01',
  measurementId: 'G-3CZ5GF27EX',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
