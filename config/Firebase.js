import Firebase from 'firebase';
let config = {
  // enter your firebase script here
apiKey: "AIzaSyDxhWj6kuxqxdP_yvV6Is5AWeKJx9abzIw",
  authDomain: "fir-7a8a8.firebaseapp.com",
  databaseURL: "https://fir-7a8a8.firebaseio.com",
  projectId: "fir-7a8a8",
  storageBucket: "fir-7a8a8.appspot.com",
  messagingSenderId: "671690736383",
  appId: "1:671690736383:web:9feed1032008ce77"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
export const auth = app.auth();
