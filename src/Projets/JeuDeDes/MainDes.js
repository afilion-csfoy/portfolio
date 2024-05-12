import React from 'react';

export function MainDes({ main, handleClick }) {
  return (
    <>
      {main.map((valeurDe, index) => (
        <img 
          src={`/de${valeurDe}.png`} 
          width={104} 
          onClick={() => handleClick(index)} className="p-1"
        />
      ))}
    </>
  );
}