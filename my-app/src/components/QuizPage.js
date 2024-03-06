import React, { useState } from 'react';
//import QuizComponent from './QuizComponent';
//import QuizComponent2 from './QuizComponent2';
//import QuizComponent3 from './QuizComponent3';
//import QuizResults from './QuizResults';
import booksData from '../data/books.json';

function QuizPage() {
  const [answers, setAnswers] = useState({
    genre: '',
    condition: '',
    type: ''
  });

  const filteredBooks = booksData.books.filter((book) => {
    return book.genre.toLowerCase() === answers.genre.toLowerCase();
  });
}

export default QuizPage;