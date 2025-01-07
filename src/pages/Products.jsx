import React from 'react';
import FlowerCard from '../components/Flowercard';

const Products = () => {
  // Sample flower data
  const flowers = [
    { name: 'Rose Bouquet', price: 25, image: 'https://th.bing.com/th/id/OIP.cDVahjC3Tkradcg09LzXNAHaLH?rs=1&pid=ImgDetMain' },
    { name: 'Tulip Arrangement', price: 30, image: 'https://th.bing.com/th/id/OIP.plG9TL9if0zXjYdv5IeocgHaLH?w=1365&h=2048&rs=1&pid=ImgDetMain' },
    { name: 'Sunflower Basket', price: 20, image: 'https://thumbs.dreamstime.com/b/sunflowers-linen-basket-24327045.jpg' },
  ];

  return (
    <div className="products">
      <h1>Our Flowers</h1>
      <div className="flower-grid">
        {flowers.map((flower, index) => (
          <FlowerCard key={index} name={flower.name} price={flower.price} image={flower.image} />
        ))}
      </div>
    </div>
  );
};

export default Products;
