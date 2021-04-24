import React from "react";
import "./Products.css";


class Checkout extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    creditCard: "",
    zipCode: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { total } = this.props;
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    if (!firstName || !lastName || !email) {
      window.alert("Input is not valid");
    } else if (creditCard.length !== 16) {
      window.alert("Credit card number is not valid");
    } else if (zipCode.length !== 5) {
      window.alert("Zip code is not valid");
    } else {
      window.alert(`Yay! Purchase complete! You will be charged $${total}.`);
    }
  };
  render() {
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    console.log(this.state);
    return (
      <section className="checkoutSection">
        <h1>Checkout</h1>
        <form onSubmit={this.handleSubmit} className="checkout">
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Credit Card
            <input
              type="text"
              name="creditCard"
              value={creditCard}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Zip Code
            <input
              type="text"
              name="zipCode"
              value={zipCode}
              onChange={this.handleChange}
            />
          </label>
          <button>Buy Now</button>
        </form>
      </section>
    );
  }
}

export default Checkout;
