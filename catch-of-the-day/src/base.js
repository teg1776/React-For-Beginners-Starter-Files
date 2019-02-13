import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCTZDD9bf14hUV2uS-CpAAMeKWeivFe4pM",
  authDomain: "catch-of-the-day-ortega.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ortega.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export

export default base;
