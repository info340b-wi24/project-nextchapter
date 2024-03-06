import React from 'react';
import booksData from '../data/books.json';

function QuizResults({ selectedGenre, selectedCondition, selectedType }) {
  // Filter the books based on selected genre, condition, and type
  const filteredBooks = booksData.books.filter(book => {
    return (
      book.genre === selectedGenre &&
      book.condition === selectedCondition &&
      book.type === selectedType
    );
  });

  return (
    <section className="books-listed">
      <header className="page-title">
        <h1>Our Recommendations for you</h1>
        <p>Based on your choices....</p>
      </header>
      {filteredBooks.map((book, index) => (
        <div className="item" key={index}>
          <div className="card">
            <div className="card-front">
              <img src={book.imgSrc} alt={book.altText} />
              <h3>{book.title}</h3>
              <p>{book.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default QuizResults;
