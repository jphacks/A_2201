import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfISc1M4G3JXq29WxyED294MmMZuG65aA",
    authDomain: "team-bookmark-41340.firebaseapp.com",
    projectId: "team-bookmark-41340",
    storageBucket: "team-bookmark-41340.appspot.com",
    messagingSenderId: "256523254378",
    appId: "1:256523254378:web:4717c3b925800153baa813",
    measurementId: "G-HNTYTX6XP9"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;