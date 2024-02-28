import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './navbar';
import AboutUs from './aboutus';
import Home from './homepage';
import UploadForm from './uploadpage'; // Make sure to adjust the path as necessary
import BookList from './bookcard'; // Make sure to adjust the path as necessary
import Footer from './footer';
import QuizComponent from './quizquestion1';
import QuizComponent2 from './quizquestion2';
import QuizComponent3 from './quizquestion3';

function app(props) {
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