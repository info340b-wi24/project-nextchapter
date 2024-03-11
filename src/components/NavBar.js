import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  const [hamburgerOpen, setHamburger] = useState(false);

  function toggleHamburger(){
    setHamburger(!hamburgerOpen)
  }

  function hamburgerLinks(status){
    if(status){
      return(
        <div className="hamburger-links">
              <div><Link onClick={() => toggleHamburger()} to="/upload">Upload</Link></div>
              <div><Link onClick={() => toggleHamburger()} to="/quizparent">Quiz</Link></div>
              <div><Link onClick={() => toggleHamburger()} to="/about-us">About Us</Link></div>
              <div><Link onClick={() => toggleHamburger()} to="/book-shelf">BookShelf</Link></div>
          </div>
      );
    }
  }

  return (
    <header>
    <nav className="navbar">
      <div className="project-name">
        <Link onClick={() => setHamburger(false)} to="/">
          <img width="48" height="48" src="https://img.icons8.com/doodle/48/book-shelf--v1.png" alt="book-shelf--v1"/> Next Chapter
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/quizparent">Quiz</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/book-shelf">BookShelf</Link></li>
      </ul>
      
      <div className="hamburger-menu" onClick={() => toggleHamburger()}> 
            <span className="bar"></span>
            <span className="bar"></span> 
            <span className="bar"></span>   
      </div> 
    </nav>
    {hamburgerLinks(hamburgerOpen)}
    </header>
  );
}

export default NavBar;