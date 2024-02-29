import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {

  const [hamburgerOpen, setHamburger] = useState(false);

  function toggleHamburger(){
    setHamburger(!hamburgerOpen)
    if(hamburgerOpen === true){
      return("active");
    } else {
      return("none");
    }
  }

  return (
    <header>
    <nav className="navbar">
      <div className="project-name">
        <Link to="/">
          <img width="48" height="48" src="https://img.icons8.com/doodle/48/book-shelf--v1.png" alt="book-shelf--v1"/> Next Chapter
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/quizquestion1">Quiz</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/my-shelf">My Shelf</Link></li>
      </ul>
      
      <div className="hamburger" onClick={() => toggleHamburger()} display={hamburgerOpen}> 
            <span className="bar"></span>
            <span className="bar"></span> 
            <span className="bar"></span>   
        
      </div> 
    </nav>
    {hamburgerOpen &&
      (<div className="hamburger-links">
            <div><Link onClick={() => toggleHamburger()} to="/upload">Upload</Link></div>
            <div><Link onClick={() => toggleHamburger()} to="/quizquestion1">Quiz</Link></div>
            <div><Link onClick={() => toggleHamburger()} to="/about-us">About Us</Link></div>
            <div><Link onClick={() => toggleHamburger()} to="/my-shelf">My Shelf</Link></div>
        </div>)}
    </header>
  );
}

export default NavBar;
