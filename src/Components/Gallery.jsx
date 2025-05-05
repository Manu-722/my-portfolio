import React from 'react';
import Card from './Card';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

export default function Gallery() {
  const galleryImages = [
    { title: 'Paris', imgSrc: img1, imgAlt: 'Paris skyline' },
    { title: 'Rome', imgSrc: img2, imgAlt: 'Rome architecture' },
    { title: 'London', imgSrc: img3, imgAlt: 'London street' },
    { title: 'New York', imgSrc: img4, imgAlt: 'New York cityscape' },
    { title: 'Los Angeles', imgSrc: img5, imgAlt: 'Los Angeles sunset' },
  ];

  return (
    <section className="gallery px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">My Photo Gallery</h2>
      <div className="gallery-container flex flex-wrap justify-center gap-6">
        {galleryImages.map((image, index) => (
          <Card
            key={index}
            title={image.title}
            imgSrc={image.imgSrc}
            imgAlt={image.imgAlt}
          />
        ))}
      </div>
    </section>
  );
}
