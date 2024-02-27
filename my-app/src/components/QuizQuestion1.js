import React from 'react';

function QuizComponent() {
  return (
    <div>
      <header className="page-title">
        <h1>Find Your Next Book!</h1>
        <h2>Question 1/3</h2>
      </header>

      <section className="quiz">
        <form action="quizquestion2.html" method="post">
          <h2>What Kind of Genre do You Like?</h2>
          <div className="option">
            <input type="radio" id="fantasy" name="genre" value="fantasy" required />
            <label htmlFor="fantasy">Fantasy</label>
          </div>
          <div className="option">
            <input type="radio" id="mystery" name="genre" value="mystery" required />
            <label htmlFor="mystery">Mystery</label>
          </div>
          <div className="option">
            <input type="radio" id="science-fiction" name="genre" value="science fiction" required />
            <label htmlFor="science-fiction">Science Fiction</label>
          </div>
          <div className="option">
            <input type="radio" id="romance" name="genre" value="romance" required />
            <label htmlFor="romance">Romance</label>
          </div>
          <div className="submit">
            <button type="submit">Next</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default QuizComponent;
