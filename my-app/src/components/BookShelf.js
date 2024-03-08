import React, { useState, useEffect } from 'react';
import { ref, onValue, getDatabase } from 'firebase/database';

function BookShelf() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const booksRef = ref(db, 'UserData');
  
    const unsubscribe = onValue(booksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const booksArray = Object.values(data).map(book => ({
          ...book,
          imgSrc: book.Photo,
          altText: `Cover of ${book.BookTitle}`, 
          createdAtNumeric: Number(book.createdAt)
        }))
        .sort((a, b) => b.createdAtNumeric - a.createdAtNumeric)
        .slice(0, 9);

        setBooks(booksArray);
      } else {
        setBooks([]);
      }
    }, (error) => {
      console.error(error);
      setBooks([]);
    });

    
    return () => unsubscribe();
  }, []);

  return (
    <div className="myshelfcontainer">
      <header className="page-title">
        <h1>Our Community Shelf</h1>
        <h2>Most recent stories uploaded by our readers!</h2>
      </header>
      <div className="bookshelf">
        {books.map((book, index) => (
          <div className="book" key={index}>
            <img src={book.imgSrc} alt={book.altText || "Book cover"} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookShelf;
