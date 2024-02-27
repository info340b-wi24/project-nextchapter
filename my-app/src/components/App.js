import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import AboutUs from './AboutUs'; 
import Home from './Homepage';

import GenreTags from './Tags';
<<<<<<< Updated upstream
import bookData from '../data/books.json';
import UploadForm from './UploadPage'; // Make sure to adjust the path as necessary
import BookList from './BookCard'; // Make sure to adjust the path as necessary
=======
import BookListing from './BookCard';
import Footer from './Footer'; 
>>>>>>> Stashed changes

function App(props) {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/upload" element={<UploadForm />} />
      </Routes>
<<<<<<< Updated upstream
      
      <BookList />
=======

      <GenreTags />
      <BookListing />
      <Footer/>
>>>>>>> Stashed changes
    </Router>
  );
}

export default App;

