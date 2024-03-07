import React from 'react';
import QuizComponent from './QuizComponent';

function QuizQuestion2(props) {
  const options = [
    { value: 'New', label: 'New' },
    { value: 'Like_new', label: 'Like New' },
    { value: 'Good', label: 'Good' },
    { value: 'Acceptable', label: 'Acceptable' }
  ];

  return (
    <QuizComponent
      userId={props.userId}
      userData={props.userData}
      questionNumber={2}
      questionText="What Condition do You Want Your Book In?"
      options={options}
      onNextButtonClick={props.onNextButtonClick}
    />
  );
}

export default QuizQuestion2;