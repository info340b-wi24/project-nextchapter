import React from 'react';
import { NavBar } from './NavBar'; 
import { MyComponent } from './MyComponent'; 

function App() {
  const bookData = {
    title: "Harry Potter",
    imgUrl: "/img/harryp.jpeg", 
    author: "J.K. Rowling",
  };

  return (
    <div>
      <NavBar />
      <MyComponent /> {/* Render MyComponent here */}
    </div>
  );
}

export default App;
