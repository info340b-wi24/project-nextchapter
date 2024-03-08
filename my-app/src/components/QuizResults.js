import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ref, get, getDatabase } from 'firebase/database';

function QuizResults() {
  const location = useLocation();
  const [books, setBooks] = useState([]);
  const { selectedGenre, selectedCondition, selectedType } = location.state || {};

  useEffect(() => {
    const db = getDatabase();
    const booksRef = ref(db, 'UserData');

    get(booksRef).then((snapshot) => {
      const data = snapshot.val();
      if (data) {
        const filteredBooks = Object.values(data).filter(book => (
          book.Genre === selectedGenre &&
          book.Condition === selectedCondition &&
          book.CoverType === selectedType
        ));
        setBooks(filteredBooks);
      } else {
        setBooks([]);
      }
    }).catch((error) => {
      console.error(error);
      setBooks([]);
    });
  }, [selectedGenre, selectedCondition, selectedType]);

  return (
    <div>
      <h3>Our Recommendations for You</h3>
      {books.length === 0 ? (
        <p>No matching books found.</p>
      ) : (
        <div className="books-listed">
          {books.map((book, index) => (
            <div key={index} className="item">
              <div className="card">
                <img src={book.Photo} alt={`Cover of ${book.BookTitle}`} />
                <h3>{book.BookTitle}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizResults;