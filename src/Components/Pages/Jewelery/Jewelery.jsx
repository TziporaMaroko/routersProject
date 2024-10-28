import React, { useState, useEffect } from 'react';
import { getJewelery } from '../../../service/products.js';
import '../../../App.css'
import ProductCard from '../../ProductCard/ProductCard.jsx';
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
          <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Jewelery;

