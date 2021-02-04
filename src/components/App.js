import React from "react";
import Header from './Header';
import Navigation from "./Navigation";


class App extends React.Component {

  render() {
    return (
      <div className="Two-Sons">
<Header/>
<Navigation/>
      </div>
    );
  }
}

export default App;