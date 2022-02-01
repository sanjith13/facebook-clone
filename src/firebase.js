import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBkRfqbBXPksiq5rWYYeo1Dbay8Fw2MVk4",
  authDomain: "facebook-clone-bbe34.firebaseapp.com",
  projectId: "facebook-clone-bbe34",
  storageBucket: "facebook-clone-bbe34.appspot.com",
  messagingSenderId: "653440983936",
  appId: "1:653440983936:web:1b3e71f413916e03f99765",
  measurementId: "G-ZN8NFF3W11"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
// Use this to initialize the firebase App
export { auth };
export default db;