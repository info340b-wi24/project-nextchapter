import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ref, get, getDatabase } from 'firebase/database';

function QuizResults() {
  const location = useLocation();
  const [books, setBooks] = useState([]);
  const { selectedGenre, selectedCondition, selectedType } = location.state || {};

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const db = getDatabase();
        const booksRef = ref(db, 'UserData');

        const snapshot = await get(booksRef);
        const data = snapshot.val();

        console.log("Data from database:", data);
        console.log("Filtering with criteria:", selectedGenre, selectedCondition, selectedType);

        if (data) {
          const filteredBooks = Object.values(data).filter(book => {
            const isGenreMatch = book.Genre.toLowerCase() === selectedGenre.toLowerCase();
            const isConditionMatch = book.Condition.toLowerCase() === selectedCondition.toLowerCase();
            const isCoverTypeMatch = book.CoverType.toLowerCase() === selectedType.toLowerCase();

            // Debug output for each book
            console.log(`Checking book: ${book.BookTitle}`);
            console.log(`Genre match: ${isGenreMatch}, Condition match: ${isConditionMatch}, CoverType match: ${isCoverTypeMatch}`);

            return isGenreMatch && isConditionMatch && isCoverTypeMatch;
          });

          console.log("Filtered books:", filteredBooks);
          setBooks(filteredBooks);
        } else {
          setBooks([]);
        }
      } catch (error) {
        console.error(error);
        setBooks([]);
      }
    };

    fetchBooks();
  }, [selectedGenre, selectedCondition, selectedType]);

  return (
    <div className="recommendations-container">
      <h3>Our Recommendations for You</h3>
      {books.length === 0 ? (
        <p>No matching books found, please fill out the quiz again!</p>
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