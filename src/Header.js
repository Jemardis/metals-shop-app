import React, { Component } from "react";
import metalslogo from "./metalslogo.jpg";
import shoppingcart from "./shoppingcart.svg";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(event) {
    let buttonText = event.target.innerHTML;
    //buttonText === "Log in"

    if (buttonText === "Log in") {
      alert("You've clicked the log in button");
    } else {
      // buttonText === "View Shopping Cart"
      // we've clicked the shopping cart button
      // have alert with different message
      alert("You've clicked the shopping cart button");
    }
  }

  render() {
    return (
      <div className="header-container">
        <img className="logo" src={metalslogo} alt="metals-logo" />
        <div className="header-description">Metals Trading Inc</div>

        <button
          className="header-buttons log-in-button"
          onClick={this.handleClick}
        >
          Log in
        </button>
        <div className="shopping-cart-container">
          <img
            className="shopping-card-logo"
            src={shoppingcart}
            alt="shopping-cart-logo"
          />
          <button
            className="header-buttons shopping-cart-button"
            onClick={this.handleClick}
          >
            View Shopping Cart
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
