import { getDatabase, ref, child, push, get } from 'firebase/database';
import firebaseConfig from '../firebase/firebase-config';

// Get a reference to the database
const db = getDatabase();

// Get a reference to the "books" data
const booksRef = ref(db, 'books');