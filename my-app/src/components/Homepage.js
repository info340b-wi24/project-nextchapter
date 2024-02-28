import React from 'react';

function MyComponent(props) {
    return (
      <header>
           <section className="custom-section">
              <div className="header-content">
                 <h1>Next Chapter</h1>
                 <p>Swap Your Shelf: Discover New Reads, Share Old Favorites!</p>
                 <div className="create">
                 <button onClick={() => {window.location.href='/myshelf';}}>Start Swapping</button>
              </div>
                 </div>
           </section>
        </header>
    );
  }


function Home(props) {
    return (
        <MyComponent />
    );
  }

  export default Home;
