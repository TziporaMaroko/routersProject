import React from "react";
import style from "./ProductCard.module.css";

const ProductCard = ({ item }) => {
  return (
    <div className={style.productCard}>
      <img src={item.image} alt={item.title} className={style.productImage} />
      <div className={style.productDetails}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
