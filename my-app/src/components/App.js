import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import Home from './Homepage';
import BookList from './BookCard';
import Footer from './Footer';
// import QuizQuestion1 from './QuizQuestion1';
// import QuizQuestion2 from './QuizQuestion2';
// import QuizQuestion3 from './QuizQuestion3';
import ParentComponent from './ParentQuiz';
import Shelf from './MyShelf';
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
        {/* <Route path="/quizquestion2" element={<QuizQuestion2/>} />
        <Route path="/quizquestion3" element={<QuizQuestion3/>} /> */}
        <Route path="/quizresults" element={<QuizResults/>} />
        <Route path="/my-shelf" element={<Shelf/>} />
        <Route path="*" element={<Navigate to="/"/>}></Route>
      </Routes>

      <BookList/>
      <Footer/>
    </Router>
  );
}

export default App;