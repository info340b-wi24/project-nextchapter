import React from 'react';
import booksData from '../data/books.json';

function MyShelf() {
  
  return (
    <div className="myshelfcontainer">
      <header className="page-title">
        <h1>@book-worm Shelf</h1>
        <h2>Your List Swaps & Giveaways!</h2>
      </header>
    <div className="bookshelf">
      {booksData.books.map((book, index) => (
        <div className="book" key={index}>
          <img src={book.imgSrc} alt={book.altText} />
        </div>
      ))}
    </div>
    </div>
  );
};

function Shelf(props) {
  return (
    <MyShelf />
  );
}

export default Shelf;


