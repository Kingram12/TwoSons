import React from "react";
import ContactUs from "./ContactUs";
import Header from './Header';
import Navigation from "./Navigation";


class App extends React.Component {
  state = {
    available: {},
    sold: {},
  };

  addCar = (car) => {
    // 1. Take a copy of the existing state
    const cars = { ...this.state.cars };
    // 2. Add our new fish to that fishes variable
    cars[`fish${Date.now()}`] = car;
    // 3. Set the new fishes object to state
    this.setState({ cars });
  };


  render() {
    return (
      <div className="Two-Sons">
<Header/>
<Navigation/>
<ContactUs/>
      </div>
    );
  }
}

export default App;