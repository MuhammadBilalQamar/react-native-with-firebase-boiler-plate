import Firebase from 'firebase';
let config = {
  // enter your firebase script here

};
let app = Firebase.initializeApp(config);
export const db = app.database();
export const auth = app.auth();
