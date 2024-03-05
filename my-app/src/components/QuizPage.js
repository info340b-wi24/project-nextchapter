import React, { useState } from 'react';
import QuizComponent from './QuizComponent';
import QuizComponent2 from './QuizComponent2';
import QuizComponent3 from './QuizComponent3';
import QuizResults from './QuizResults';
import booksData from '../data/books.json';

function QuizPage() {
  const [answers, setAnswers] = useState({
    genre: '',
    condition: '',
    type: ''
  });

  // Handlers to update the state with each answer
  const handleGenreSelect = (genre) => {
    setAnswers((prev) => ({ ...prev, genre }));
  };

  const handleConditionSelect = (condition) => {
    setAnswers((prev) => ({ ...prev, condition }));
  };

  const handleTypeSelect = (type) => {
    setAnswers((prev) => ({ ...prev, type }));
  };

  // Filter books based on answers
  const filteredBooks = booksData.books.filter((book) => {
    // Add your filtering logic here based on the genre, condition, and type
    // For example:
    return book.genre.toLowerCase() === answers.genre.toLowerCase();
  });

  return (
    <div>
      <QuizComponent onGenreSelect={handleGenreSelect}/>
      <QuizComponent2 onConditionSelect={handleConditionSelect} />
      <QuizComponent3 onTypeSelect={handleTypeSelect} />
    </div>
  );
}



export default QuizPage;
