import React from "react";
import SubHeader from "./sub_header";
import BestOffer from "../common/bestoffer";
import Service from "../common/services";

import Content from "./content";

const Checkout = () => {
    return(
        <>
            <SubHeader />
            <Content />
            <BestOffer />
            <Service />
        </>

    )
}

export default Checkout;