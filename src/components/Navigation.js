import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from './Inventory';
import Sold from './Sold';
import About from './About';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function SetUpRoutes() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/currentInventory">Current Inventory</Link>
          </li>
          <li>
            <Link to="/pastInventory">Past Inventory</Link>
          </li>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
        <Route path="/currentInventory">
            <CurInv/>
            </Route>
          <Route path="/pastInventory">
            <PastInv/>
          </Route>
          <Route path="/aboutUs">
            <AboutUs/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function CurInv() {
  return (
    <div>
      <Inventory/>
    </div>
  );
}

function PastInv() {
  return (
    <div>
      <Sold/>
    </div>
  );
}


function AboutUs() {
  return (
    <div>
      <About/>
    </div>
  );
}


