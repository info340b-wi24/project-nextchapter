import React from 'react';

function QuizComponent3({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    //onSubmit(event);
  };

  return (
    <div>
      <header className="page-title">
        <h1>Find Your Next Book!</h1>
        <h2>Question 3/3</h2>
      </header>

      <section className="quiz">
        <form onSubmit={handleSubmit}>
          <h2>Paperback or Hardback?</h2>
          <div className="option">
            <input
              type="radio"
              id="paperback"
              name="type"
              value="paperback"
              required
            />
            <label htmlFor="paperback">Paperback</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="hardback"
              name="type"
              value="hardback"
              required
            />
            <label htmlFor="hardback">Hardback</label>
          </div>
          <div className="submit">
                 <button onClick={() => {window.location.href='/quizresults';}}>Submit</button>
              </div>
        </form>
      </section>
    </div>
  );
};

export default QuizComponent3;