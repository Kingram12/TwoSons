import React from "react";

class Car extends React.Component {
  render() {
    const { year, make, model, price, details, image } = this.props.details;

    return (
      <li className="car-inv">
        <img src={image} alt={model} />
        <h3 className="car-info">
          {year}{make}{model}
        </h3>
        <p>{price}
        {details}</p>
      </li>
    );
  }
}

export default Car;

//what is the longest repeated piece of the code? Ex: this.props.details.name then this.props.details.image --- shorten to a deconstructed version SEE ABOVE --
