import React from "react";


const Header = () => {

    return(
      <nav className="navbar navbar-light navbar-expand-lg bg-dark bg-faded osahan-menu">
        <div className="container-fluid">
            <a className="navbar-brand" href="index.html"> <img src="https://askbootstrap.com/preview/groci/img/logo.png" alt="logo" /> </a>
            <a className="location-top" href="#"><i className="mdi mdi-map-marker-circle" aria-hidden="true"></i> New York</a>
            <button className="navbar-toggler navbar-toggler-white" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse" id="navbarNavDropdown">
                <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                <div className="top-categories-search">
                    <div className="input-group">
                        <span className="input-group-btn categories-dropdown">
                            <select className="form-control-select" id="city_sel">
                                <option selected="selected">Your City</option>
                                <option value="0">New Delhi</option>
                                <option value="2">Bengaluru</option>
                                <option value="3">Hyderabad</option>
                                <option value="4">Kolkata</option>
                            </select>
                        </span>
                        <input className="form-control" placeholder="Search products in Your City" aria-label="Search products in Your City" type="text" />
                        <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button"><i className="mdi mdi-file-find"></i> Search</button>
                        </span>
                    </div>
                </div>
                </div>
                <div className="my-2 my-lg-0">
                <ul className="list-inline main-nav-right">
                    <li className="list-inline-item">
                        <a href="#" data-target="#bd-example-modal" data-toggle="modal" className="btn btn-link"><i className="mdi mdi-account-circle"></i> Login/Sign Up</a>
                    </li>
                    <li className="list-inline-item cart-btn">
                        <a href="#" data-toggle="offcanvas" className="btn btn-link border-none"><i className="mdi mdi-cart"></i> My Cart <small className="cart-value">5</small></a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </nav>

    
    )


}

export default Header;