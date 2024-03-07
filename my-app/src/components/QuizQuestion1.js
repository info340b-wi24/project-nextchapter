import React from 'react';
import QuizComponent from './QuizComponent';

function QuizQuestion1(props) {
  const options = [
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'mystery', label: 'Mystery' },
    { value: 'science fiction', label: 'Science Fiction' },
    { value: 'romance', label: 'Romance' },
    { value: 'fiction', label: 'Fiction' },
    { value: 'children', label: 'Children' },
    { value: 'fairytale', label: 'Fairytale' }
  ];

  return (
    <QuizComponent
      userId={props.userId}
      userData={props.userData}
      questionNumber={1}
      questionText="What Kind of Genre do You Like?"
      options={options}
      onNextButtonClick={props.onNextButtonClick}
    />
  );
}

export default QuizQuestion1;