import React from 'react';
import QuizComponent from './QuizComponent';

function QuizQuestion2(props) {
  const options = [
    { value: 'new', label: 'New' },
    { value: 'like_new', label: 'Like New' },
    { value: 'good', label: 'Good' },
    { value: 'acceptable', label: 'Acceptable' }
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