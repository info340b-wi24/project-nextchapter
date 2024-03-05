import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import bookData from '../data/books.json';
import GenreTags from './Tags.js'; 

function BookList() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const books = bookData.books;

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const handleResetClick = () => {
    setSelectedGenre('All');
    setSearchQuery('');
  };

  const filteredBooks = books.filter(book => 
    (selectedGenre === 'All' || book.genre === selectedGenre) &&
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isHomePage = location.pathname === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <div>
      <div className="search-container">
        <div className="search-input-container">
          <input 
            type="text" 
            placeholder="Search by book name..." 
            value={searchQuery} 
            onChange={handleSearchInputChange} 
          />
          <button>Search</button>
        </div>
      </div>
      <GenreTags onGenreClick={handleGenreClick} onResetClick={handleResetClick} />
      <div className="books-listed">
        {filteredBooks.map((book, index) => ( 
          <div key={index} className="item">
             <Link to={`/books/${book.title}`} className="book-link">
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
            </Link>
          </div>
        ))}
      </div>
      <h3>Find your next read!</h3>
      <div className="create">
        <Link to="/quizquestion1"><button>Take A Quiz</button></Link>
      </div>
    </div>
  );
}

export default BookList;