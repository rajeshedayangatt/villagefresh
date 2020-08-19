import React from "react";
import Sidebar from "./sidebar";
import ProductList from "./productlist";


const Content = () => {

    return(

        <section className="shop-list section-padding">
         <div className="container">
            <div className="row">
            <Sidebar />
            <ProductList />
            </div>
         </div>
      </section>
    )

}

export default Content;