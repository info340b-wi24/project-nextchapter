import React, { useState } from 'react';
import bookData from '../data/books.json';
import GenreTags from './Tags.js'; 

function BookList() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const books = bookData.books;

 
  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredBooks = books.filter(book => selectedGenre === 'All' || book.genre === selectedGenre);

  return (
    <div>
      <GenreTags onGenreClick={handleGenreClick} /> {/* Pass handleGenreClick to GenreTags */}
      <div className="books-listed">
        {filteredBooks.map((book, index) => ( 
          <div key={index} className="item">
            <div className="card">
              <img src={book.imgSrc} alt={book.altText} />
              <h3>{book.title}</h3>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;


