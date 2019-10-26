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
        <img src={metalslogo} />
        <div>Metals Trading</div>
        <button>Log in</button>
        <div>
          <img src={shoppingcart} />
          <button>View Shopping Cart</button>
        </div>
      </div>
    );
  }
}

export default Header;
