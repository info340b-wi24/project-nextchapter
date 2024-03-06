import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuizComponent3(props) {
  const [selectedType, setSelectedType] = useState('');
  const navigate = useNavigate();

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleNextButtonClick = () => {
    if (selectedType) {
      navigate('/quizresults');
    } else {
      alert('Please select a type');
    }
  };

  return (
    <div>
      <header className="page-title">
        <h1>Find Your Next Book!</h1>
        <h2>Question 3/3</h2>
      </header>

      <section className="quiz">
        <form>
          <h2>Paperback or Hardcover?</h2>
          <div className="option">
            <input
              type="radio"
              id="paperback"
              name="type"
              value="paperback"
              checked={selectedType === 'paperback'}
              onChange={handleTypeChange}
            />
            <label htmlFor="paperback">Paperback</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="hardcover"
              name="type"
              value="hardcover"
              checked={selectedType === 'hardcover'}
              onChange={handleTypeChange}
            />
            <label htmlFor="hardcover">Hardcover</label>
          </div>
          <div className="submit">
            <button type="button" onClick={handleNextButtonClick}>Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default QuizComponent3;