import React from 'react';

function QuizResults({ books }) {
  return (
    <section className="books-listed">
      {books.map((book, index) => (
        <div className="item" key={index}>
          <div className="card">
            <div className="card-front">
              <img src={book.imgSrc} alt={book.altText} />
              <h3>{book.title}</h3>
              <p>{book.description}</p>
            </div>
            <div className="card-back">
              <h3>More Details</h3>
              <p>Back side information...</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default QuizResults;