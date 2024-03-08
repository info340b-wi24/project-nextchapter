import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizComponent from './QuizComponent';

function ParentQuiz(props) {
    const [answers, setAnswers] = useState({
        Genre: '',
        Condition: '',
        CoverType: ''
      });
      const navigate = useNavigate();
    
      const handleCollectAnswers = (questionNumber, selectedOption) => {
        const questionKeyMap = {
            '1': 'Genre',
            '2': 'Condition',
            '3': 'CoverType'
          };
        
        const key = questionKeyMap[questionNumber];

        setAnswers((prevAnswers) => {
            const updatedAnswers = {
                ...prevAnswers,
                [key]: selectedOption
              };
          
              // Lex Debug
              console.log("Updated answers:", updatedAnswers);
          
              return updatedAnswers;
            });
          };
    
          const handleSubmit = (event) => {
            event.preventDefault();
            
            const { Genre: selectedGenre, Condition: selectedCondition, CoverType: selectedType } = answers;
          
            if (!selectedGenre || !selectedCondition || !selectedType) {
              alert('Please answer all questions before submitting.');
              return;
            }
            
            navigate('/quizresults', { state: { selectedGenre, selectedCondition, selectedType } });
          };
    
  const genreOptions = [
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Mystery', label: 'Mystery' },
    { value: 'Science Fiction', label: 'Science Fiction' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Fiction', label: 'Fiction' },
    { value: 'Children', label: 'Children' },
    { value: 'Fairytale', label: 'Fairytale' }
  ];

  const conditionOptions = [
    { value: 'New', label: 'New' },
    { value: 'Like new', label: 'Like New' },
    { value: 'Good', label: 'Good' },
    { value: 'Acceptable', label: 'Acceptable' }
  ];

  const coverOptions = [
    { value: 'Paperback', label: 'Paperback' },
    { value: 'Hardcover', label: 'Hardcover' }
  ];


  return (
    <div>
      <header className="page-title">
        <h1>Find Your Next Book!</h1>
      </header>

      <section className="quiz">
        <form onSubmit={handleSubmit}>
            <QuizComponent
            userData={props.userData}
            questionNumber={1}
            questionText="What Kind of Genre do You Like?"
            options={genreOptions}
            onCollectAnswers={handleCollectAnswers}
            />
            <QuizComponent
            userData={props.userData}
            questionNumber={2}
            questionText="What Condition do You Want Your Book In?"
            options={conditionOptions}
            onCollectAnswers={handleCollectAnswers}
            />
           <QuizComponent
            userData={props.userData}
            questionNumber={3}
            questionText="Paperback or Hardcover?"
            options={coverOptions}
            onCollectAnswers={handleCollectAnswers}
            />  

          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ParentQuiz;