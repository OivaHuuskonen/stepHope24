/*import { data } from "../data/data.js";

const Work2 = () => {
  return (
    <div name="work" className="w-full py-12 md:min-h-screen bg-[#ffdb99]">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-2 text-[#008B8B] border-[#778899]">
            Joitain linkkejä
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.linkki}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-md shadow-lg bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto transition-transform transform scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-white text-lg font-bold">{item.name}</p>
              </div>




            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work2;

import { data } from "../data/data.js";

const Work2 = () => {
  return (
    <div name="work" className="w-full py-12 md:min-h-screen bg-[#ffdb99]">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-2 text-[#008B8B] border-[#778899]">
            Joitain linkkejä
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.linkki}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-md shadow-lg bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto transition-transform transform scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-white text-lg font-bold">{item.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work2;


import { data } from "../data/data.js";

const Work2 = () => {
  return (
    <div name="work" className="w-full py-12 md:min-h-screen bg-[#ffdb99]">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-2 text-[#008B8B] border-[#778899]">
            Joitain linkkejä
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.linkki}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-md shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto transition-opacity opacity-100 group-hover:opacity-0"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-white text-lg font-bold">{item.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work2;*/



import { useState } from 'react';
import { data } from "../data/data.js";

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardClick = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div name="work" className="w-full py-12 md:min-h-screen bg-[#ffdb99]">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-2 text-[#008B8B] border-[#778899]">
            Joitain linkkejä
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {data.map((item, index) => (
            <a
              key={item.id}
              href={item.linkki}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative overflow-hidden rounded-md shadow-lg ${hoveredIndex === index ? 'hovered' : ''}`}
              onClick={() => handleCardClick(index)}
              /*className="relative overflow-hidden rounded-md shadow-lg"*/
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image}
                alt={item.name}
                className={`w-full h-auto transition-opacity ${
                  hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-white text-lg font-bold">{item.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
