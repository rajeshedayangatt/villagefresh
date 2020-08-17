import React from "react";
import {Link} from "react-router-dom";
  
const Navbar = () => {

    return(
        <div>
            <ul className="nav">
              <li className="nav-link">
                <Link to="/home">Home</Link>
              </li>
              <li className="nav-link">
                <Link to="/about">About</Link>
              </li>
            </ul>

        </div>
    )

};

export default Navbar;