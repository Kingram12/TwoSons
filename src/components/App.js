import React from "react";
import ContactUs from "./ContactUs";
import Header from './Header';
import Navigation from "./Navigation";
import cars from "../cars";


class App extends React.Component {
  state = {
    available: {},
    sold: {},
  };

  loadCars = () => {
    this.setState({ available: cars });
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