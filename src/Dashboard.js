import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.css";

const METALS_API_KEY = `${process.env.REACT_APP_METALS_API_KEY}`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceDate: "",
      metalsPrices: [],
      fee: 1.07
    };
  }

  handleQuantityChange(event, index) {
    let quantity = event.target.value;
    let metalName = event.target.name;
    let totalMetalCost = quantity * this.state.metalsPrices[index].price;
    totalMetalCost = Number(totalMetalCost.toFixed(2));

    this.setState(prevState => ({
      metalsPrices: prevState.metalsPrices.map(metalObj =>
        metalObj.name === metalName
          ? { ...metalObj, totalCost: totalMetalCost }
          : metalObj
      )
    }));
  }

  calculateTotalAmount() {
    let totalAmount = 0;

    for (let i = 0; i < this.state.metalsPrices.length; i++) {
      totalAmount += this.state.metalsPrices[i].totalCost;
    }

    let totalAmountWithFee = totalAmount * this.state.fee;
    totalAmountWithFee = Number(totalAmountWithFee.toFixed(2));
    return totalAmountWithFee;
  }

  componentDidMount() {
    var date;
    var prices = [];

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://metals-api.com/api/latest?access_key=
      ${METALS_API_KEY}`
      )
      .then(response => {
        date = response.data.date;

        //mapping, metals that you want shown in your app
        const metalMap = {
          XAU: "Gold",
          XPT: "Platinum",
          XPD: "Palladium",
          XAG: "Silver",
          MTL: "Danish Krone"
        };

        //for(let key in obj)
        for (let metal in response.data.rates) {
          if (metalMap[metal]) {
            //if the metal is part of metalMap, then add metal to metalPrices arr
            let metalInfo = {
              name: metalMap[metal],
              price: Number(response.data.rates[metal].toFixed(2)),
              totalCost: 0
            };
            prices.push(metalInfo);
          }
        }
      })
      .then(result => {
        this.setState({
          priceDate: date,
          metalsPrices: prices
        });
      });
  }

  render() {
    return (
      this.state.metalsPrices.length > 0 && (
        <div className="dashboard-container">
          {this.state.metalsPrices.map((metalPriceInfo, index) => {
            return (
              <div className="dashboard-row" key={index}>
                <h4 className="row-name">Metal: {metalPriceInfo.name}</h4>
                <span className="header-value">
                  <span className="header-text">Unit Price:</span>
                  <span>{metalPriceInfo.price}</span>
                </span>
                <span className="header-value">
                  <span className="header-text">Quantity:</span>
                  <input
                    onChange={event => this.handleQuantityChange(event, index)}
                    type="text"
                    name={metalPriceInfo.name}
                  />
                </span>
                <span className="header-value">
                  <span className="header-text">Cost:</span>
                  <input
                    type="text"
                    name="totalCost"
                    value={this.state.metalsPrices[index].totalCost}
                    disabled={true}
                  />
                </span>
              </div>
            );
          })}
          <div className="dashboard-row">
            <h4 className="row-name">Price</h4>
            <h4 className="row-name">Fee: 7%</h4>
            <span className="header-value">
              <span className="header-text">Total:</span>
              {this.calculateTotalAmount()}
            </span>
            <button
              onClick={() => {
                let totalAmount = this.calculateTotalAmount();
                return alert(`Total amount is ${totalAmount}`);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )
    );
  }
}

export default Dashboard;
