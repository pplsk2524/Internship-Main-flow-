import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './ImageGallery.css';

const images = [
  require('./image7.jpeg'),
  require('./image8.jpeg'),
  require('./image9.jpeg'),
  require('./image10.jpeg'),
  require('./image11.jpeg'),
  require('./image12.jpeg'),
  require('./image3.jpeg'),
  require('./image1.jpeg'),
  require('./image2.jpeg'),
  require('./image5.jpeg'),
  require('./image6.jpeg'),
  require('./image4.jpeg'),
  // more images
];

const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageItem key={index} src={image} onClick={() => openModal(index)} />
      ))}
      {selectedImageIndex !== null && (
        <Modal 
          image={images[selectedImageIndex]} 
          onClose={closeModal} 
          onNext={goToNextImage} 
          onPrevious={goToPreviousImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;
