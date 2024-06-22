import React from 'react';
import './Modal.css';

const Modal = ({ image, onClose, onNext, onPrevious }) => {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>&times;</span>
      <span className="prev" onClick={onPrevious}>&#10094;</span>
      <img className="modal-content" src={image} alt="Modal" />
      <span className="next" onClick={onNext}>&#10095;</span>
    </div>
  );
};

export default Modal;
