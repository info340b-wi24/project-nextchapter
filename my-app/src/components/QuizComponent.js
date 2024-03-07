import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuizComponent(props) {
  const { questionNumber, questionText, options, onCollectAnswers } = props;
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    onCollectAnswers(questionNumber, selectedValue);
    
  };

  return (
    <div>

      <section className="quiz">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>{questionText}</h2>
          {options.map(option => (
            <div className="option" key={option.value}>
              <input
                type="radio"
                id={`option-${questionNumber}-${option.value}`}
                name={`option${questionNumber}`}
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleOptionChange}
              />
              <label htmlFor={`option-${questionNumber}-${option.value}`}>{option.label}</label>
            </div>
          ))}
          {/* <div className="submit">
            {/* <button type="button" onClick={handleNextButtonClick}>Next</button> */}
          {/* </div> */} 
        </form>
      </section>
    </div>
  );
}

export default QuizComponent;
