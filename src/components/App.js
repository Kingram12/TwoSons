import React from "react";
import Header from './Header';
import Navigation from "./Navigation";
import Inventory from "./Inventory";
import Sold from "./Sold"
class App extends React.Component {

  render() {
    return (
      <div className="Two-Sons">
<Header/>
<Navigation/>
<Inventory/>
<Sold/>
      </div>
    );
  }
}

export default App;