import React, { useState } from 'react';
import GalleryImg1 from "../assets/animal_home.jpg";
import GalleryImg2 from "../assets/chateau_img.JPG";
import GalleryImg3 from "../assets/disney.jpg";
import GalleryImg4 from "../assets/disneyland.jpg";
import GalleryImg5 from "../assets/eiffel_img.jpg";
import GalleryImg6 from "../assets/ilnur.jpg";
import GalleryImg7 from "../assets/lavender.jpg";
import GalleryImg8 from "../assets/Louvre_img.jpg";
import GalleryImg9 from "../assets/mont saint-michel.jpg";
import GalleryImg10 from "../assets/mont_home.jpg";
import GalleryImg11 from "../assets/mont_img.jpg";
import GalleryImg12 from "../assets/notre_img.jpg";
import GalleryImg13 from "../assets/palace.jpg";
import GalleryImg14 from "../assets/river_img.jpg";
import GalleryImg15 from "../assets/pedro.jpg";

import './Gallery.css'; // CSS file for styling

function Gallery() {
  const images = [
    GalleryImg1,
    GalleryImg2,
    GalleryImg3,
    GalleryImg4,
    GalleryImg5,
    GalleryImg6,
    GalleryImg7,
    GalleryImg8,
    GalleryImg9,
    GalleryImg10,
    GalleryImg11,
    GalleryImg12,
    GalleryImg13,
    GalleryImg14,
    GalleryImg15,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="gallery-container">
      <div className="overlay"></div>
      <h1>Image Collection</h1>
      <div className="slideshow">
        <button onClick={handlePrev} className="nav-button">❮</button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
        />
        <button onClick={handleNext} className="nav-button">❯</button>
      </div>

      <div className="thumbnail-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail"
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
