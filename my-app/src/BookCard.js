// This is for the books on the homepage that flip

import React from 'react';

function BookCard({ title, imageUrl, author }) {
    return (
      <div className="card">
        <div className="card-front">
          <img src={imageUrl} alt={title} />
          <h3>{title}</h3>
          {/* More content */}
        </div>
        {/* Card back content */}
      </div>
    );
  }

  export default BookCard;