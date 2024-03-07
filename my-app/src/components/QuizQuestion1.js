import React from 'react';
import QuizComponent from './QuizComponent';

function QuizQuestion1(props) {
  const options = [
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Mystery', label: 'Mystery' },
    { value: 'Science Fiction', label: 'Science Fiction' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Fiction', label: 'Fiction' },
    { value: 'Children', label: 'Children' },
    { value: 'Fairytale', label: 'Fairytale' }
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