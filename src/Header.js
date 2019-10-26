import React, { Component } from "react";
import metalslogo from "./metalslogo.jpg";
import shoppingcart from "./shoppingcart.svg";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-container">
        <img src={metalslogo} alt="metals-logo" />
          <div className="header-description">Metals Trading</div>
          <button className="header-buttons">Log in</button>
          <div className="shopping-cart-container">
            <img
              className="shopping-card-logo"
              src={shoppingcart}
              alt="shopping-cart-logo"
            />
            <button className="header-buttons shopping-cart-button">
              View Shopping Cart
            </button>
          </div>
      </div>
    );
  }
}

export default Header;
