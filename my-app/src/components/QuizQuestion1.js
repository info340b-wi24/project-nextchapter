import React from 'react';

function QuizComponent({ onGenreSelect }) {
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
        <h2>Question 1/3</h2>
      </header>

      <section className="quiz">
        <form onSubmit={handleSubmit}>
          <h2>What Kind of Genre do You Like?</h2>
          <div className="option">
            <input
              type="radio"
              id="fantasy"
              name="genre"
              value="fantasy"
              onChange={handleGenreSelect}
              required
            />
            <label htmlFor="fantasy">Fantasy</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="mystery"
              name="genre"
              value="mystery"
              onChange={handleGenreSelect}
              required
            />
            <label htmlFor="mystery">Mystery</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="science-fiction"
              name="genre"
              value="science fiction"
              onChange={handleGenreSelect}
              required
            />
            <label htmlFor="science-fiction">Science Fiction</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="romance"
              name="genre"
              value="romance"
              onChange={handleGenreSelect}
              required
            />
            <label htmlFor="romance">Romance</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="fiction"
              name="genre"
              value="fiction"
              onChange={handleGenreSelect}
              required
            />
            <label htmlFor="fiction">Fiction</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="children"
              name="genre"
              value="children"
              onChange={handleGenreSelect}
              required
            />
            <label htmlFor="children">Children</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="fairytale"
              name="genre"
              value="fairytale"
              onChange={handleGenreSelect}
              required
            />
            <label htmlFor="fairytale">Fairytale</label>
          </div>
          <div className="submit">
            <button onClick={() => { window.location.href = '/quizquestion2'; }}>Next</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default QuizComponent;