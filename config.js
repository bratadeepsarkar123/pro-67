import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyCbw5UhzaD4ospbILeGCBUDOzhe5k8cUQ8",
  authDomain: "pro-67-b9ea2.firebaseapp.com",
  databaseURL: "https://pro-67-b9ea2-default-rtdb.firebaseio.com",
  projectId: "pro-67-b9ea2",
  storageBucket: "pro-67-b9ea2.appspot.com",
  messagingSenderId: "914378069673",
  appId: "1:914378069673:web:12d7675c0c0596c003fbb8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();