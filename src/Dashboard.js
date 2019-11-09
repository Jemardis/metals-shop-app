import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceDate: "2019-04-2019",
      metalPrices: [
        { name: "Gold", price: 1292.8 },
        { name: "Silver", price: 15.19 }
      ]
    };
  }

  render() {
    return (
      <div className="dashboard-conatainer">
        {this.state.metalPrices.map((metalPriceInfo, index) => {
          return (
            <div key={index}>
              Metal: {metalPriceInfo.name} {metalPriceInfo.price}
              quantity:{" "}
              <input type="text" name="unitQuantity"/>
                  
            </div>
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
