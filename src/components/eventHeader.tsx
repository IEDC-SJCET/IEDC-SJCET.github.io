import React from 'react';

const EventHeader = () => {

  const rows = 6;
  const cols = 26;

  return (
    <div className="w-full max-w-6xl mx-auto bg-black py-12">
      <div className="relative">
        {/* Grid Container */}
        <div className="relative border border-gray-700 w-full">
          {/* Grid Lines */}
          <div 
            className="grid w-full aspect-[26/6]" 
            style={{
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
          >
            {/* Generate grid cells */}
            {Array.from({ length: rows * cols }).map((_, i) => (
              <div 
                key={i} 
                className="border border-gray-700/50"
              />
            ))}
          </div>

          {/* Text Overlay */}
          <div className="absolute top-0 left-0 h-full flex items-center">
            <h1 className="text-white font-normal px-4 text-4xl md:text-5xl lg:text-6xl">
              Events
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHeader;