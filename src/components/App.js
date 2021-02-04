import React from "react";
import ContactUs from "./ContactUs";
import Header from './Header';
import Navigation from "./Navigation";


class App extends React.Component {

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