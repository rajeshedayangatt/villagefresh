import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,

} from "react-router-dom";

import {routes,RouteWithSubRoutes} from "./routes";
import Navbar from './component/common/navbar';
import Footer from './component/common/footer';
import Header from './component/common/header';
import Copyright from './component/common/copyright';


function App() {
  return (
    <>
      <Router>
          <Header />
          <Navbar></Navbar>

          <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
          </Switch>

          <Footer />
          <Copyright />
      </Router>
    </>
  );
}

export default App;
