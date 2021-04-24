import React from "react";
import "./Products.css";


const Cart = ({ cart, subtotal }) => {
  // const{name, price, id} = cart

  return (
    <section className="cartSection">
      <h1>Cart</h1>
      <ul className="cart">
        {cart.map((product) => {
          const { name, price, id } = product;
          return (
            <li key={id}>
              {name}: ${price.toFixed(2)}
            </li>
          );
        })}
      </ul>
      <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
      <h3>Tax: ${(subtotal * 0.05).toFixed(2)}</h3>
      <h3>Total: ${(subtotal * 1.05).toFixed(2)}</h3>
    </section>
  );
};
export default Cart;
