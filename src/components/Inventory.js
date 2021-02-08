import React from "react";
import cars from "../cars";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {available: cars};
  }


  render() {

    return (
      <div className="inventory" >
       {cars.map((car, index) => (
          <div key={index}>
            <h3>{car.image}</h3>
            <p>{car.year}</p>
            <p>{car.make}</p>
            <p>{car.model}</p>
          </div>
        ))}

      </div>
    );
  }
}

export default Inventory;
