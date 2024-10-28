import React, { useState, useEffect } from "react";
import { getWomensClothing } from "../../../service/products.js";
import ProductCard from '../../ProductCard/ProductCard.jsx';

const WomenClothing = () => {
  const [clothing, setClothing] = useState([]);

  useEffect(() => {
    getWomensClothing()
      .then((response) => response.json())
      .then((data) => setClothing(data))
      .catch((error) =>
        console.error("Error fetching women’s clothing:", error)
      );
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
