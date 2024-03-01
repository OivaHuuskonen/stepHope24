import React, { useState } from 'react';
import { data } from '../data/data';

const Cards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardClick = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <a
          key={item.id}
          href={item.linkki}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative overflow-hidden rounded-md shadow-lg ${hoveredIndex === index ? 'hovered' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          <img src={item.image} alt={item.name} />
          <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
            <p className="text-white text-center">{item.name}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Cards;