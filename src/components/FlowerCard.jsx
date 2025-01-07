import React from 'react';

const FlowerCard = ({ name, price, image }) => (
  <div className="flower-card">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>Price: ${price}</p>
  </div>
);

export default FlowerCard;