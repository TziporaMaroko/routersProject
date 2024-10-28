import React, { useState, useEffect } from 'react';
import { getJewelery } from '../../service/products.js';
import '../../App.css'
const Jewelery = () => {
  const [jewelery, setJewelery] = useState([]);

  useEffect(() => {
    getJewelery()
      .then(response => response.json())
      .then(data => setJewelery(data))
      .catch(error => console.error('Error fetching jewelery:', error));
  }, []);

  return (
      <div className="products-grid">
      {jewelery.map(item => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.title} className="product-image" />
          <div className="product-details">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jewelery;

