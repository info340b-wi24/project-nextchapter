import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue, getDatabase } from 'firebase/database';

function BookDetail() {
  const { bookTitle } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const booksRef = ref(db, 'UserData');

    // Find the book with matching title
    onValue(booksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const foundBook = Object.values(data).find((b) => b.BookTitle === bookTitle);
        if (foundBook) {
          setBook(foundBook);
        } else {
          setBook(null); // Book not found
        }
      } else {
        setBook(null); // No books available
      }
    }, (error) => {
      console.error(error);
      setBook(null); // Error occurred
    });
  },[bookTitle]);

  const genre = book ? (book.Genre ? book.Genre.toLowerCase() : '') : '';

  return (
    <div>
      {book && (
        <div className="card">
          <img src={book.Photo} alt={`Cover of ${book.BookTitle}`} />
          <h3>{book.BookTitle}</h3>
          <div className={`genre-box type-button-${genre}`}>
            {book.Genre}
          </div>
          <p>Book Condition: {book.Condition}</p>
          <p>Book Type: {book.CoverType}</p>
          <p>Book Length: {book.Length}</p>
          <p>{book.Description}</p>
          <p>Contact Owner: {book.Name}</p>
        </div>
      )}
    </div>
  );
}

export default BookDetail;