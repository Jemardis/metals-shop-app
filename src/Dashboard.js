import React, { Component } from "react";
import axios from "axios";

const METALS_API_KEY = `${process.env.REACT_APP_METALS_API_KEY}`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceDate: "",
      metalsPrices: []
    };
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
          XAG: "Silver"
        };

        //for(let key in obj)
        for (let metal in response.data.rates) {
          if (metalMap[metal]) {
            //if the metal is part of metalMap, then add metal to metalPrices arr
            let metalInfo = {
              name: metalMap[metal],
              price: response.data.rates[metal]
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
        <div className="dashboard-conatainer">
          {this.state.metalsPrices.map((metalPriceInfo, index) => {
            return (
              <div key={index}>
                Metal: {metalPriceInfo.name} {metalPriceInfo.price}
                quantity: <input type="text" name="unitQuantity" />
              </div>
            );
          })}
        </div>
      )
    );
  }
}

export default Dashboard;
