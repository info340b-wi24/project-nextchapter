import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <nav className="navbar">
      <div className="project-name">
        <Link to="/">
          <img width="48" height="48" src="https://img.icons8.com/doodle/48/book-shelf--v1.png" alt="book-shelf--v1"/> Next Chapter
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/quizquestion1">Quiz</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
