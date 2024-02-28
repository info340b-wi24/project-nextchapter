import React, { useState } from 'react';

function QuizComponent2({ onGenreSelect }) {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreSelect = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <header className="page-title">
        <h1>Find Your Next Book!</h1>
        <h2>Question 2/3</h2>
      </header>

      <section className="quiz">
        <form onSubmit={handleSubmit}>
          <h2>What Condition do You Want Your Book In?</h2>
          <div className="option">
            <input
              type="radio"
              id="new"
              name="condition"
              value="new"
              required
            />
            <label htmlFor="new">New</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="like-new"
              name="condition"
              value="like_new"
              required
            />
            <label htmlFor="like-new">Like New</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="good"
              name="condition"
              value="good"
              required
            />
            <label htmlFor="good">Good</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="acceptable"
              name="condition"
              value="acceptable"
              required
            />
            <label htmlFor="acceptable">Acceptable</label>
          </div>
          <div className="submit">
                 <button onClick={() => {window.location.href='/quizquestion3';}}>Next</button>
              </div>
        </form>
      </section>
</div>
  );
};

export default QuizComponent2;