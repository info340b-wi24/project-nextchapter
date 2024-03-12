import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ref, onValue, getDatabase } from 'firebase/database';
import GenreTags from './Tags.js'; 

function BookList() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const booksRef = ref(db, 'UserData');
  
    const unsubscribe = onValue(booksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const booksArray = Object.values(data).map(book => ({
          ...book,
          title: book.BookTitle, 
          genre: book.Genre, 
          imgSrc: book.Photo,
          decision: book.Decision,
          altText: `Cover of ${book.BookTitle}`, 
        }))
        .slice(0, 30); 

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
    (book.title ? book.title.toLowerCase().includes(searchQuery.toLowerCase()) : false)
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
              <h2>{book.title}</h2>
              <div className={`decision-tag ${book.decision.toLowerCase()}`}>
                {book.decision}
              </div>
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
      <h2>Find your next read!</h2>
      <div className="create">
        <Link to="/quizParent"><button>Take A Quiz</button></Link>
      </div>
    </div>
  );
}

export default BookList;