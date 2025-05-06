import React from "react";

const images = [
  { src: "/src/assets/img1.jpg", alt: "Paris" },
  { src: "/src/assets/img2.jpg", alt: "Rome" },
  { src: "/src/assets/img3.jpg", alt: "London" },
  { src: "/src/assets/img4.jpg", alt: "New York" },
  { src: "/src/assets/img5.jpg", alt: "Los Angeles" },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <h2>My Photo Gallery</h2>
      <div className="gallery-container">
        {images.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} width="200" height="150" />
        ))}
      </div>
    </section>
  );
}
