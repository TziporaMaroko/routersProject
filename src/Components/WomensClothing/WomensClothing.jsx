import React, { useState, useEffect } from "react";
import { getWomensClothing } from "../../service/products.js";

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

export default WomenClothing;
