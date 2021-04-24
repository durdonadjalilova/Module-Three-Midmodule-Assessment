import React from "react";
import "./Products.css";

const Product = ({ product, addProduct }) => {
  const { name, price, img, description } = product;

  return (
    <li className="product">
      <h3>{name}</h3>
      <p className="price">Price: ${price.toFixed(2)}</p>
      <button
        onClick={() => {
          addProduct(product);
        }}
      >
        Add To Cart
      </button>
      <img src={img} alt="product"/>
      <p>{description}</p>
    </li>
  );
};

export default Product;
