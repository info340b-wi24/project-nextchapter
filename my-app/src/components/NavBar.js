// This creates our NavBar 

import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar(props) {
   return (
     <nav>
       <div className="project-name">
         <Link to="/">
           <img width="48" height="48" src="https://img.icons8.com/doodle/48/book-shelf--v1.png" alt="book-shelf--v1"/> Next Chapter
         </Link>
       </div>
       <ul>
         <li><Link to="./UploadPage">Upload</Link></li>
         <li><Link to="./QuizQuestion1">Quiz</Link></li>
         <li><Link to="./AboutUs">About Us</Link></li>
         <li><Link to="./MyShelf">My Shelf</Link></li>
       </ul>
     </nav>
   );
 }
