import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase, ref} from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyCIqOqj4FPhttqkoLYF24wwzTv7MniZRd8",
  authDomain: "project-nextchapter-f60bb.firebaseapp.com",
  projectId: "project-nextchapter-f60bb",
  storageBucket: "project-nextchapter-f60bb.appspot.com",
  messagingSenderId: "94282876991",
  appId: "1:94282876991:web:ff63476b4a0df4257cd08a",
  measurementId: "G-MDK1XJ1SVE"
};


const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getDatabase(app);

export { app, storage, db, firebaseConfig };