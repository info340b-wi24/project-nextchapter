import React, { useState } from 'react';

function UploadForm() {
  const [bookData, setBookData] = useState({
    bookTitle: '',
    author: '',
    genre: '',
    bookType: '',
    bookLength: '',
    bookCondition: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    localStorage.setItem('books', JSON.stringify([...books, bookData]));
    setBookData({
      bookTitle: '',
      author: '',
      genre: '',
      bookType: '',
      bookLength: '',
      bookCondition: '',
    });
    alert('Book uploaded successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="button-container">
      </div>
      <label htmlFor="bookTitle">Book Title:</label>
      <input
        id="bookTitle"
        className="upload-form"
        name="bookTitle"
        value={bookData.bookTitle}
        onChange={handleChange}
        required
      />
      <button type="submit" className="finalcenter-button">Upload</button>
    </form>
  );
}

export default UploadForm;

