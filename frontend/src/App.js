import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {routes,RouteWithSubRoutes} from "./routes";
import Navbar from './component/common/navbar';
import Searchbar from './component/common/searchbar';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
           
          <Searchbar></Searchbar>
          <Navbar></Navbar>

            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
