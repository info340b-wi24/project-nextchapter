import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import AboutUs from './AboutUs'; 
import Home from './Homepage';
import QuizQuestion1 from './QuizQuestion1';

function App(props) {
  return (
    <Router>
    <NavBar />

      {/* Routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/quizquestion1" element={<QuizQuestion1 />} />
      </Routes>
    </Router>

  );
}

export default App;
