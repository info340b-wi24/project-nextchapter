import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';

function QuizComponent2(props) {
  const [selectedCondition, setSelectedCondition] = useState('');

  const handleConditionChange = (event) => {
    setSelectedCondition(event.target.value);
  };

  const handleNextButtonClick = () => {
    if (selectedCondition) {
      const db = getDatabase();
      const userRef = ref(db, 'UserData/' + props.userId);
      set(userRef, {
        ...props.userData, // Include previous data
        selectedCondition: selectedCondition
      })
      .then(() => {
        window.location.href = `/quizquestion3?genre=${props.selectedGenre}&condition=${selectedCondition}`;
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
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
