import React, { useState} from 'react';

export function myShelf(props){
    <body>
    <header className="page-title">
        <h1>My Shelf</h1>
        <p>@book-worm</p>
        <p>Your listed swaps and giveaways</p>
    </header>

   <Bookshelf />
   </body>
}

function Bookshelf(props){
    return (
        <div className="bookshelf">
            <Book />
        </div>
    ); 
}

function Book(props){
    return (
        <div className="book">
            <img src="img/harryp.jpeg" alt="Harry P Book"/>
        </div>
    );
}

export default myShelf;