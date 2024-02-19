// Importing image in a React component
import oldBooksImage from './images/oldbooks.jpg';

function MyComponent() {
  return (
    <header>
         <section class="custom-section">
            <div class="header-content">
               <h1>Next Chapter</h1>
               <p>Swap Your Shelf: Discover New Reads, Share Old Favorites!</p>
               <div class="create">
                  <button onclick="location.href='loginpage.html';">Start Swapping</button>
              </div>
               </div>
         </section>
      </header>
  );
}
export default MyComponent;