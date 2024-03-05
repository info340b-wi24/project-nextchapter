import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import Home from './Homepage';
import BookList from './BookCard';
import Footer from './Footer';
import QuizComponent from './QuizQuestion1';
import QuizComponent2 from './QuizQuestion2';
import QuizComponent3 from './QuizQuestion3';
import QuizComponent4 from './QuizQuestion4';
import Shelf from './MyShelf';
import QuizResults from './QuizResults';
import BookDetail from './Bookdetails';
import QuizPage from './QuizPage';
import Form from './UploadPage';

function App(props) {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/upload" element={<Form/>} />
        <Route path="/books/:bookId" element={<BookDetail />} />
        <Route path="/quizquestion1" element={<QuizComponent/>} />
        <Route path="/quizquestion2" element={<QuizComponent2/>} />
        <Route path="/quizquestion3" element={<QuizComponent3/>} />
        <Route path="/quizquestion4" element={<QuizComponent4/>} />
        <Route path="/quizresults" element={<QuizResults/>} />
        <Route path="/my-shelf" element={<Shelf/>} />
      </Routes>

      <BookList/>
      <Footer/>
    </Router>
  );
}

export default App;