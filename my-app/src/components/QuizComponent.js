import React, { useState } from 'react';

function QuizComponent({ index, question, options, onGenreSelect }) {
  const handleGenreSelect = (event) => {
    onGenreSelect(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const optionElements = options.map((option, index) => (
    <div className='option' key={index}>
      <input type="radio"
        id={option}
        name={option}
        value={option}
        onChange={handleGenreSelect}
        required
      />
      <label htmlFor={option}>{option}</label>
    </div>
  ));

  return (
  <div>
    <header className='page-title'>
        <h1>Find Your Next Book</h1>
        <h2>Question {index}/3</h2>
    </header>

    <section className="quiz">
        <form onSubmit={handleSubmit}>
            <h2>Question</h2>
            <div className="option">
            <input
              type="radio"
              id="fantasy"
              name="genre"
              value="fantasy"
              checked={selectedGenre === 'fantasy'}
              onChange={handleGenreChange}
            />
            <label htmlFor="fantasy">Fantasy</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="mystery"
              name="genre"
              value="mystery"
              checked={selectedGenre === 'mystery'}
              onChange={handleGenreChange}
            />
            <label htmlFor="mystery">Mystery</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="science-fiction"
              name="genre"
              value="science fiction"
              checked={selectedGenre === 'science fiction'}
              onChange={handleGenreChange}
            />
            <label htmlFor="science-fiction">Science Fiction</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="romance"
              name="genre"
              value="romance"
              checked={selectedGenre === 'romance'}
              onChange={handleGenreChange}
            />
            <label htmlFor="romance">Romance</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="fiction"
              name="genre"
              value="fiction"
              checked={selectedGenre === 'fiction'}
              onChange={handleGenreChange}
            />
            <label htmlFor="fiction">Fiction</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="children"
              name="genre"
              value="children"
              checked={selectedGenre === 'children'}
              onChange={handleGenreChange}
            />
            <label htmlFor="children">Children</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="fairytale"
              name="genre"
              value="fairytale"
              checked={selectedGenre === 'fairytale'}
              onChange={handleGenreChange}
            />
            <label htmlFor="fairytale">Fairytale</label>
          </div>
          <div className="submit">
            <button type="button" onClick={handleNextButtonClick}>Next</button>
            </div>
        </form>
      </section>
    </div>
  );
}

export default QuizComponent;