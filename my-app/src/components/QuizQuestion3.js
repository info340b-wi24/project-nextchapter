import React from 'react';
import QuizComponent from './QuizComponent';

function QuizQuestion3(props) {
  const options = [
    { value: 'Paperback', label: 'Paperback' },
    { value: 'Hardcover', label: 'Hardcover' }
  ];

  return (
    <QuizComponent
      userId={props.userId}
      userData={props.userData}
      questionNumber={3}
      questionText="Paperback or Hardcover?"
      options={options}
      onNextButtonClick={props.onNextButtonClick}
    />
  );
}

export default QuizQuestion3;