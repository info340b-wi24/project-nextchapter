import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import AboutUs from './AboutUs'; 
import Home from './Homepage';

import GenreTags from './Tags';
import bookData from '../data/books.json';
import UploadForm from './UploadPage';
import BookList from './BookCard';
import Footer from './Footer';
import QuizComponent from './QuizQuestion1';

function App(props) {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/quizquestion1" element={<QuizComponent/>}/>
      </Routes>
      
      <BookList/>
      <Footer/>
    </Router>
  );
}

export default App;