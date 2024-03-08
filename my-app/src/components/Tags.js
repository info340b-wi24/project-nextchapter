import React from 'react';
import { useLocation } from 'react-router-dom';

function GenreTags({ onGenreClick, onResetClick }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (!isHomePage) {
    return null;
  }

  const genres = [
    { name: 'Fiction', className: 'type-button-fiction' },
    { name: 'Non-Fiction', className: 'type-button-non-fiction' },
    { name: 'Horror', className: 'type-button-horror' },
    { name: 'Mystery', className: 'type-button-mystery' },
    { name: 'Romance', className: 'type-button-romance' },
    { name: 'Narrative', className: 'type-button-narrative' },
    { name: 'Informative', className: 'type-button-informative' },
    { name: 'Children', className: 'type-button-children' },
    { name: 'Science', className: 'type-button-science' },
    { name: 'Biography', className: 'type-button-biography' },
    { name: 'Fairytale', className: 'type-button-fairy' },
    { name: 'Poetry', className: 'type-button-poetry' },
  ];

  const genreButtons = genres.map((genre) => (
    <button
      key={genre.name}
      className={genre.className}
      onClick={() => onGenreClick(genre.name)}
    >
      {genre.name}
    </button>
  ));

  return (
    <div>
      <h2>Filter through Genres</h2>
      <div className="types-of-books row">
        <div className="filter-types row">
          <div className="tags">
            {genreButtons}
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