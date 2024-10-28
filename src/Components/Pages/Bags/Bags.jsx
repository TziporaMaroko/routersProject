import React, { useState, useEffect } from 'react';
import { getBags } from '../../../service/products.js';
import '../../../App.css'
import ProductCard from '../../ProductCard/ProductCard.jsx';
const Bags = () => {
  const [bags, setBags] = useState([]);

  useEffect(() => {
      getBags()
        .then(response => response.json())
        .then(data => {
          setBags(data);
        })
        .catch(error => console.error('Error fetching bags:', error));
    } , []);

  return (
      <div className="products-grid">
      {bags.map(item => (
          <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Bags;

