import React, { useState, useEffect } from "react";
import { getWomenClothing } from "../../../service/products.js";
import ProductCard from '../../ProductCard/ProductCard.jsx';

const WomenClothing = () => {
  const [clothing, setClothing] = useState([]);

  useEffect(() => {
    const lastFetchTime = localStorage.getItem('lastClothingFetchTime');
    const now = new Date().getTime();

    // Check if more than 1 minute has passed
    if (!lastFetchTime || now - lastFetchTime > 60000) {
      // Fetch from API
      getWomenClothing()
        .then(response => response.json())
        .then(data => {
          setClothing(data);
          // Update local storage with the fetched data and the current time
          localStorage.setItem('ClothingData', JSON.stringify(data));
          localStorage.setItem('lastClothingFetchTime', now);
        })
        .catch(error => console.error('Error fetching clothing:', error));
    } else {
      // Retrieve data from local storage
      const storedClothing = localStorage.getItem('ClothingData');
      if (storedClothing) {
        setClothing(JSON.parse(storedClothing));
      }
    }
  }, []);

  return (
    <div className="products-grid">
      {clothing.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default WomenClothing;
