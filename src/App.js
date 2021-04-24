import React from "react";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import "./App.css";

class App extends React.Component {
  state = { cart: [] };

  addProduct = (product) => {
    this.setState((prevState) => ({
      cart: [product, ...prevState.cart],
    }));
  };

  calculateSubtotal = () => {
    // const {price} = cart
    let sum = 0;
    const { cart } = this.state;
    cart.forEach((product) => {
      sum += product.price;
    });
    return sum;
  };

  render() {
    const subtotal = this.calculateSubtotal();
    const total = (subtotal * 1.05).toFixed(2)

    return (
      <div className="components">
        <Products addProduct={this.addProduct} />
      <div className="cartAndCheckout">
        <Cart cart={this.state.cart} subtotal={subtotal} />
        <Checkout total={total}/>
        </div>
      </div>
    );
  }
}

export default App;
