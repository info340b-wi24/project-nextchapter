import React from 'react';

function QuizComponent2({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
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
            <button type="submit">Next</button>
          </div>
        </form>
      </section>
</div>
  );
};

export default QuizComponent2;