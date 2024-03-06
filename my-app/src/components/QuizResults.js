import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ref, onValue, getDatabase } from 'firebase/database';

function QuizResults({ selectedGenre, selectedCondition, selectedType }) {
  const location = useLocation();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const booksRef = ref(db, 'UserData'); 

      onValue(booksRef, (snapshot) => {
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
      }, (error) => {
        console.error(error);
        setBooks([]);
      });
    };

    fetchData();

  }, [selectedGenre, selectedCondition, selectedType]);

  const isQuizResultsPage = location.pathname === '/quizresults';

  if (!isQuizResultsPage) {
    return null;
  }

  return (
    <div>
      <h3>Our Recommendations for you</h3>
      <div className="books-listed">
        {books.map((book, index) => (
          <div key={index} className="item">
            <div className="card">
              <img src={book.Photo} alt={`Cover of ${book.BookTitle}`} />
              <h3>{book.BookTitle}</h3>
              <p>Author: {book.Author}</p>
              <p>Condition: {book.Condition}</p>
              <p>Cover Type: {book.CoverType}</p>
              <p>Genre: {book.Genre}</p>
              <p>Length: {book.Length}</p>
              <p>Name: {book.Name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizResults;



