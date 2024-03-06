import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuizComponent2(props) {
  const [selectedCondition, setSelectedCondition] = useState('');
  const navigate = useNavigate();

  const handleConditionChange = (event) => {
    setSelectedCondition(event.target.value);
  };

  const handleNextButtonClick = () => {
    if (selectedCondition) {
      navigate('/quizquestion3');
    } else {
      alert('Please select a condition');
    }
  };

  return (
    <div>
      <header className="page-title">
        <h1>Find Your Next Book!</h1>
        <h2>Question 2/3</h2>
      </header>

      <section className="quiz">
        <form>
          <h2>What Condition do You Want Your Book In?</h2>
          <div className="option">
            <input
              type="radio"
              id="new"
              name="condition"
              value="new"
              checked={selectedCondition === 'new'}
              onChange={handleConditionChange}
            />
            <label htmlFor="new">New</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="like-new"
              name="condition"
              value="like_new"
              checked={selectedCondition === 'like_new'}
              onChange={handleConditionChange}
            />
            <label htmlFor="like-new">Like New</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="good"
              name="condition"
              value="good"
              checked={selectedCondition === 'good'}
              onChange={handleConditionChange}
            />
            <label htmlFor="good">Good</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="acceptable"
              name="condition"
              value="acceptable"
              checked={selectedCondition === 'acceptable'}
              onChange={handleConditionChange}
            />
            <label htmlFor="acceptable">Acceptable</label>
          </div>
          <div className="submit">
            <button type="button" onClick={handleNextButtonClick}>Next</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default QuizComponent2;