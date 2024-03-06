import React from 'react';
import { useParams } from 'react-router-dom';
import bookData from '../data/books.json';

function BookDetail() {
  const { bookId } = useParams();
  const book = bookData.books.find((b) => b.title === bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <div className="card">
        <img src={book.imgSrc} alt={book.altText} />
        <h3>{book.title}</h3>
        <div className={`genre-box type-button-${book.genre.toLowerCase()}`}>
          {book.genre}
          </div>
        <p>Book Condition: </p>
        <p>Book Type:</p>
        <p>Book Length:</p>
        <p>{book.description}</p> 
        <p>Contact Owner:</p>
      </div>
    </div>
  );
}

export default BookDetail;