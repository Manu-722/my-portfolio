import React from 'react';


export default function Card({ title, description,  imgAlt }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#" className="read-more">Read More</a>
      </div>
      <div className="card-image">
        <img src="src\assets\image.jpg"alt={imgAlt} />
      </div>
    </div>
  );
}
