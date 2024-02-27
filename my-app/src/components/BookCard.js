import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import bookData from '../data/books.json';
import GenreTags from './Tags.js'; 

function BookList() {
  const location = useLocation();
  const [selectedGenre, setSelectedGenre] = useState('All');
  const books = bookData.books;
 
  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const handleResetClick = () => {
    setSelectedGenre('All');
  };

  const filteredBooks = books.filter(book => selectedGenre === 'All' || book.genre === selectedGenre);

  const isHomePage = location.pathname === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <div>
      <GenreTags onGenreClick={handleGenreClick} onResetClick={handleResetClick} /> {/* Pass onResetClick function */}
      <div className="books-listed">
        {filteredBooks.map((book, index) => ( 
          <div key={index} className="item">
            <div className="card">
              <img src={book.imgSrc} alt={book.altText} />
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              {selectedGenre && (
                <div 
                  className={`genre-box type-button-${book.genre.toLowerCase()}`} 
                >
                  {book.genre}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <h2>Find your next read!</h2>
      <div className="create">
      <Link to="/quizquestion1"><button>Take A Quiz</button></Link>
      </div>
    </div>
  );
}

export default BookList;
