import React from "react";
import Categories from "./categories";
import Banner from "./banner";
import ProductList from "./productlist";
import Footer from "../common/footer";
import Header from "../common/header";
import OfferProduct from "./offer_product";
import BestOffers from "./bestoffer";
import Services from "../common/services";


const Home = () => {
    return(
        <>
            <Banner />
            <Categories />
            <ProductList />
            <OfferProduct />
            <BestOffers />
            <Services />
        </>
    )
};


export default Home;