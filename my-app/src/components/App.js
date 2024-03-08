import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import Home from './Homepage';
import BookList from './BookCard';
import Footer from './Footer';
import ParentComponent from './ParentQuiz';
import BookShelf from './BookShelf';
import QuizResults from './QuizResults';
import BookDetail from './Bookdetails';
import Form from './UploadPage';

function App(props) {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/upload" element={<Form/>} />
        <Route path="/books/:bookTitle" element={<BookDetail />} />
        <Route path="/quizparent" element={<ParentComponent/>} />
        <Route path="/quizresults" element={<QuizResults/>} />
        <Route path="/book-shelf" element={<BookShelf/>} />
        <Route path="*" element={<Navigate to="/"/>}></Route>
      </Routes>

      <BookList/>
      <Footer/>
    </Router>
  );
}

export default App;