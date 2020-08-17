import React from "react";


const Searchbar = () => {

    return(
        <div className="row">
            <div className="col-md-4">
                <img src="/assets/images/logo.png" />
            </div>
            <div className="col-md-4">
                <input type="text" name="search" placeholder="Enter keyword here" />
                <button className="btn btn-info">Search</button>
            </div>

            <div className="col-md-4">
                <a href="#">My Cart</a>
            </div>

        </div>
    )
}

export default Searchbar;