import React, { useState } from 'react';

function QuizComponent(props) {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleNextButtonClick = () => {
    if (selectedGenre) {
      window.location.href = '/quizquestion2';
    } else {
      alert('Please select a genre');
    }
  };

  return (
    <div>
      <header className="page-title">
        <h1>Find Your Next Book!</h1>
        <h2>Question 1/3</h2>
      </header>

      <section className="quiz">
        <form>
          <h2>What Kind of Genre do You Like?</h2>
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