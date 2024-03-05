import React from 'react';
import { useLocation } from 'react-router-dom';

function GenreTags({ onGenreClick, onResetClick }) { // Define onResetClick prop
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  if (!isHomePage) {
    return null;
  }
  const genres = [
    { name: 'Fiction', className: 'type-button-fiction' },
    { name: 'Non-Fiction', className: 'type-button-non' },
    { name: 'Horror', className: 'type-button-horror' },
    { name: 'Mystery', className: 'type-button-mystery' },
    { name: 'Romance', className: 'type-button-romance' },
    { name: 'Narrative', className: 'type-button-nar' },
    { name: 'Informative', className: 'type-button-informative' },
    { name: 'Children', className: 'type-button-children' },
    { name: 'Science', className: 'type-button-science' },
    { name: 'Biography', className: 'type-button-biography' },
    { name: 'Fairy tale', className: 'type-button-fairy' },
    { name: 'Poetry', className: 'type-button-poetry' },
  ];

  return (
    <div>
      <h3>Filter through Genres</h3>
    <div className="types-of-books row">
      
      <div className="filter-types row">
      
        <div className="tags">
          {genres.map((genre) => (
            <button
              key={genre.name}
              className={genre.className}
              onClick={() => onGenreClick(genre.name)}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
        <button className="reset-button" onClick={onResetClick}> 
          Reset
        </button>
      </div>
    </div>
  );
}

export default GenreTags;