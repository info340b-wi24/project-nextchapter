import React, { useState } from 'react';

function UploadForm({ onBookSubmit }) {
  const [bookDetails, setBookDetails] = useState({
    bookTitle: '',
    author: '',
    genreTags: [],
    bookType: '',
    bookLength: '',
    bookCondition: '',
    file: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookDetails({
      ...bookDetails,
      [name]: value,
    });
  };

  

  return (
    
   )
  }
