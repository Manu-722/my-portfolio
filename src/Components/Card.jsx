import React from 'react';

export default function Card({ title, imgSrc, imgAlt }) {
  return (
    <div className="card border rounded-xl overflow-hidden shadow-md w-[300px]">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="h-[200px] w-[300px] object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-center">{title}</h3>
      </div>
    </div>
  );
}
