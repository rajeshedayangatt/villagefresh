import React from "react";
import Categories from "./categories";
import Banner from "./banner";
import ProductList from "./productlist";


const Home = () => {
    return(
        <div>
            <Categories />
            <Banner />
            <ProductList />
            <div className="d-block mt-5">
                <img src="/assets/images/advertisment.png" />
            </div>
            <h1>Home page</h1>
        </div>
    )
};


export default Home;