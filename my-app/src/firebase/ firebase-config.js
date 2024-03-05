import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyCIqOqj4FPhttqkoLYF24wwzTv7MniZRd8",
  authDomain: "project-nextchapter-f60bb.firebaseapp.com",
  projectId: "project-nextchapter-f60bb",
  storageBucket: "project-nextchapter-f60bb.appspot.com",
  messagingSenderId: "94282876991",
  appId: "1:94282876991:web:ff63476b4a0df4257cd08a",
  measurementId: "G-MDK1XJ1SVE"
};


// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the database
const db = getDatabase();

// Get a reference to the "books" data
const booksRef = ref(db, 'books');


