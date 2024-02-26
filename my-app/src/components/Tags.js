import React from 'react';


const handleGenreClick = (genre) => {
  console.log(`Filter by: ${genre}`);

};

const GenreTags = () => {
  const genres = [
    { name: 'Fiction', className: 'type-button-fiction' },
    { name: 'Non-Fiction', className: 'type-button-non' },
    { name: 'Fantasy', className: 'type-button-fantasy' },
    { name: 'Mystery', className: 'type-button-mystery' },
    { name: 'Romance', className: 'type-button-romance' },
    { name: 'Narrative', className: 'type-button-nar' },
    { name: 'Informative', className: 'type-button-informative' },
    { name: 'Children', className: 'type-button-chid' },
    { name: 'Science', className: 'type-button-science' },
    { name: 'Biography', className: 'type-button-biography' },
    { name: 'Fairy tale', className: 'type-button-fairy' },
    { name: 'Poetry', className: 'type-button-poetry' },
  ];

  return (
    <div className="types-of-books row">
        <h2>Filter through Genres</h2>
      <div className="filter-types row">
        <div className="tags">
          {genres.map((genre) => (
            <button
              key={genre.name}
              className={genre.className}
              value={genre.name}
              onClick={() => handleGenreClick(genre.name)}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenreTags;
