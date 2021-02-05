import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAGOs2uu2wsWwnWeiRoe-sSRtKkXg1H_As",
    authDomain: "course-match-d0348.firebaseapp.com",
    databaseURL: "https://course-match-d0348.firebaseio.com",
    projectId: "course-match-d0348",
    storageBucket: "course-match-d0348.appspot.com",
    messagingSenderId: "746587302289",
    appId: "1:746587302289:web:0295b94dfaeb9013c75230",
    measurementId: "G-F619DFSCN6"
  };
  // Initialize Firebase
  var fire = firebase.initializeApp(firebaseConfig);
  export var provider = new firebase.auth.GoogleAuthProvider();
  firebase.analytics();

  export default fire

