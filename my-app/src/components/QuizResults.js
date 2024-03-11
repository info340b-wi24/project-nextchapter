import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ref, get, getDatabase } from 'firebase/database';
import { Link } from 'react-router-dom';


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


        if (data) {
          const filteredBooks = Object.values(data).filter(book => {
            const isGenreMatch = book.Genre.toLowerCase() === selectedGenre.toLowerCase();
            const isConditionMatch = book.Condition.toLowerCase() === selectedCondition.toLowerCase();
            const isCoverTypeMatch = book.CoverType.toLowerCase() === selectedType.toLowerCase();

            return isGenreMatch && isConditionMatch && isCoverTypeMatch;
          });
          
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
          <div className="listed-recommendations">
            {books.map((book, index) => (
              <Link to={`/books/${encodeURIComponent(book.BookTitle)}`} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="resultscard">
                  <div className="recommend">
                    <img src={book.Photo} alt={`Cover of ${book.BookTitle}`} />
                    <h6 className="book-title">{book.BookTitle}</h6>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
            }
export default QuizResults;