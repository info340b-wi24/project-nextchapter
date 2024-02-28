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
      <img src={book.imgSrc} alt={book.altText} />
      <h3>{book.title}</h3>
      <p>{book.description}</p>
      <p>Genre: {book.genre}</p>
    </div>
  );
}

export default BookDetail;
