import React, { useState, useEffect } from 'react';
import { getJewelery } from '../../../service/products.js';
import '../../../App.css'
import ProductCard from '../../ProductCard/ProductCard.jsx';
const Jewelery = () => {
  const [jewelery, setJewelery] = useState([]);

  useEffect(() => {
    const lastFetchTime = localStorage.getItem('lastJeweleryFetchTime');
    const now = new Date().getTime();

    // Check if more than 1 minute has passed
    if (!lastFetchTime || now - lastFetchTime > 60000) {
      // Fetch from API
      getJewelery()
        .then(response => response.json())
        .then(data => {
          setJewelery(data);
          // Update local storage with the fetched data and the current time
          localStorage.setItem('jeweleryData', JSON.stringify(data));
          localStorage.setItem('lastJeweleryFetchTime', now);
        })
        .catch(error => console.error('Error fetching jewelry:', error));
    } else {
      // Retrieve data from local storage
      const storedJewelery = localStorage.getItem('jeweleryData');
      if (storedJewelery) {
        setJewelery(JSON.parse(storedJewelery));
      }
    }
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

