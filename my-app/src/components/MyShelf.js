import React from 'react';
import booksData from '../data/books.json';

function MyShelf() {
  
  return (
    <div className="myshelfcontainer">
      <h3>@book-worm Shelf</h3>
      <p>Your List Swaps & Giveaways!</p>
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


