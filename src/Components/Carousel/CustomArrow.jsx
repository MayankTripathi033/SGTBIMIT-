import React from 'react';
import './carousel.css'
export default function CustomArrow({ direction, onClick }) {
  return (
    <div className={`custom-arrow custom-arrow-${direction}`} onClick={onClick}>
        <img src={require('../../images/arrow.png')} alt="" />
    </div>
  );
};