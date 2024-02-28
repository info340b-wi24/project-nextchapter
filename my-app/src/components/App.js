import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import Home from './HomePage';
import UploadForm from './UploadPage'; // Make sure to adjust the path as necessary
import BookList from './BookCard'; // Make sure to adjust the path as necessary
import Footer from './Footer';
import QuizComponent from './QuizQuestion1';
import QuizComponent2 from './QuizQuestion2';
import QuizComponent3 from './QuizQuestion3';

function App(props) {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/upload" element={<UploadForm/>} />
        <Route path="/quizquestion1" element={<QuizComponent/>} />
        <Route path="/quizquestion2" element={<QuizComponent2/>} />
        <Route path="/quizquestion3" element={<QuizComponent3/>} />
      </Routes>
      
      <BookList/>
      <Footer/>
    </Router>
  );
}

export default App;