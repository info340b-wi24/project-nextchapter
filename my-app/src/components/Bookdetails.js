import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue, getDatabase } from 'firebase/database';

function BookDetail() {
  const { bookTitle } = useParams();
  const [book, setBook] = useState(null);
  const decodedBookTitle = decodeURIComponent(bookTitle);

  useEffect(() => {
    const db = getDatabase();
    const booksRef = ref(db, 'UserData');
    
    onValue(booksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const foundBook = Object.values(data).find((b) => b.BookTitle.toLowerCase().trim() === decodedBookTitle.toLowerCase().trim());
        if (foundBook) {
          setBook(foundBook);
        } else {
          setBook(null);
        }
      } else {
        setBook(null);
      }
    });

  }, [decodedBookTitle]); 

  const decision = book && book.Decision ? book.Decision.toLowerCase() : '';

  const genre = book ? (book.Genre ? book.Genre.toLowerCase() : '') : '';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(book.Email);
  };

  return (
    <div>
      {book && (
        <div className="carddetail">
          <img src={book.Photo} alt={`Cover of ${book.BookTitle}`} />
          <h2>{book.BookTitle}</h2>
          <p>Author: {book.Author}</p>
          {book.Decision && (
            <div className={`decision-tag ${decision}`}>
              {book.Decision}
            </div>
          )}
          <div className={`genre-box type-button-${genre}`}>
            {book.Genre}
          </div>
          <p>Book Condition: {book.Condition}</p>
          <p>Book Type: {book.CoverType}</p>
          <p>Book Length: {book.Length}</p>
          <p>Description: {book.Comment}</p>
          <button onClick={handleCopyEmail} className="copy-email-btn">Copy Owner Email</button>

        </div>
      )}
    </div>
  );
}

export default BookDetail;