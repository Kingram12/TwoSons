import React from "react";
import cars from "../cars";

class Inventory extends React.Component {
  state = {
    available: {},
    sold: {},
  };

  loadCars = () => {
    this.setState({ available: cars });
  };

  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <button onClick={this.loadCars}>Load Inventory</button>
      </div>
    );
  }
}

export default Inventory;
