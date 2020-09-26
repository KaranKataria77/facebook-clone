import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD4wMC6x3iyz9kD9UGtw8TfjuECFuuVP10",
    authDomain: "face-11e74.firebaseapp.com",
    databaseURL: "https://face-11e74.firebaseio.com",
    projectId: "face-11e74",
    storageBucket: "face-11e74.appspot.com",
    messagingSenderId: "974726360754",
    appId: "1:974726360754:web:354b50d591623f2137a3ab",
    measurementId: "G-E11HHS7Q15"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;