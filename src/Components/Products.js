import React from "react";
import productData from "../data/productData";
import Product from "./Product";
import "./Products.css";

const Products = ({ addProduct }) => {
  return (
    <div>
      <h1>My Garage Sale</h1>
      <ul className="Products">
        {productData.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              addProduct={addProduct}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
