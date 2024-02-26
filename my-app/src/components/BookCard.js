import React, { useState} from 'react';


function BookCard({ imgSrc, altText, title, description }) {
  return (
    <div className="item">
      <div className="card">
        <div className="card-front">
          <img src={imgSrc} alt={altText} />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}


function BookListing() {
  const [books, setBooks] = useState([
    {
      imgSrc: "img/harryp.jpeg",
      altText: "Harry Potter and The Half-Blood Prince",
      title: "Harry Potter and The Half-Blood Prince",
      description: "Swap with me!"
    },

    {
      imgSrc: "img/maze.jpg",
      altText:"Maze Runner: Book 1",
      title: "Maze Runner",
      description: "I am giving this book away"
    },

    {
      imgSrc:"img/it.jpg",
      altText:"Stephen King's IT",
      title: "IT",
      description: "Swap with me!"
    }
  ]);

  const [newBook, setNewBook] = useState({
    imgSrc: '',
    altText: '',
    title: '',
    description: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newBook.title || !newBook.description) return; 
    addBook(newBook);
    setNewBook({ imgSrc: '', altText: '', title: '', description: '' });
  };

  const addBook = (book) => {
    setBooks([...books, book]);
  };


  return (
    <section>
      <h2>Discover the Latest Listings</h2>
      <div className="books-listed">
        {books.map((book, index) => (
          <BookCard
            key={index}
            imgSrc={book.imgSrc}
            altText={book.altText}
            title={book.title}
            description={book.description}
          />
        ))}
      </div>
    </section>
  );
}

export default BookListing;
