import React from 'react';

function QuizComponent4({ onGenreSelect }) {
  const handleGenreSelect = (event) => {
    onGenreSelect(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <header className="page-title">
        <h1>Find Your Next Book!</h1>
        <h2>Question 4/4</h2>
      </header>

      <section className="quiz">
        <form onSubmit={handleSubmit}>
          <h2>Length of Book?</h2>
          <div className="option">
            <input
              type="radio"
              id="short"
              name="length"
              value="short"
              onChange={handleGenreSelect}
              required
            />
            <label htmlFor="short">Short</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="medium"
              name="length"
              value="medium"
              onChange={handleGenreSelect}
              required
            />
            <label htmlFor="mystery">Medium</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="long"
              name="length"
              value="long"
              onChange={handleGenreSelect}
              required
            />
            <label htmlFor="science-fiction">Science Fiction</label>
          </div>
          <div className="submit">
                 <button onClick={() => {window.location.href='/quizresults';}}>Submit</button>
              </div>
        </form>
      </section>
    </div>
  );
}

export default QuizComponent4;