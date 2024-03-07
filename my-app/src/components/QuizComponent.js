import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, set } from 'firebase/database';

function QuizComponent(props) {
  const { userId, questionNumber, questionText, options } = props;
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextButtonClick = () => {
    if (selectedOption) {
      const db = getDatabase();
      const userRef = ref(db, `UserData/${userId}/selectedOption${questionNumber}`);
      set(userRef, selectedOption)
      .then(() => {
        const nextQuestionNumber = questionNumber + 1;
        if (nextQuestionNumber <= 3) {
          navigate(`/quizquestion${nextQuestionNumber}`);
        } else {
          navigate('/quizresults');
        }
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    } else {
      alert('Please select an option');
    }
  };

  return (
    <div>
      <header className="page-title">
        <h1>Find Your Next Book!</h1>
        <h2>Question {questionNumber}/3</h2>
      </header>

      <section className="quiz">
        <form>
          <h2>{questionText}</h2>
          {options.map(option => (
            <div className="option" key={option.value}>
              <input
                type="radio"
                id={option.value}
                name={`option${questionNumber}`}
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleOptionChange}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
          <div className="submit">
            <button type="button" onClick={handleNextButtonClick}>Next</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default QuizComponent;