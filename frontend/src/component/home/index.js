import React from "react";
import Categories from "./categories";
import Banner from "./banner";
import ProductList from "./productlist";
import Footer from "../common/footer";


const Home = () => {
    return(
        <div>
            <Categories />
            <Banner />
            <ProductList />
            <div className="d-block mt-5">
                <img src="/assets/images/advertisment.png" />
            </div>
        </div>
    )
};


export default Home;