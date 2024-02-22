// This creates our NavBar 

import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
    <div class="project-name">
       <a href="index.html">
          <img width="48" height="48" src="https://img.icons8.com/doodle/48/book-shelf--v1.png" alt="book-shelf--v1"/> Next Chapter</a>
    </div>
    <ul>
       <li><a href="uploadpage.html">Upload</a></li>
       <li><a href="quizquestion1.html">Quiz</a></li>
       <li><a href="aboutus.js">About Us</a></li>
       <li><a href="myshelf.html">My Shelf</a></li>
    </ul>
 </nav>
  );
}

export default NavBar;
