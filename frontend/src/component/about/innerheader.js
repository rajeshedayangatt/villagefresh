import React from "react";

const InnerHeader = () => {

    return(

        <section className="section-padding bg-dark inner-header">
            <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="mt-0 mb-3 text-white">About Us</h1>
                    <div className="breadcrumbs">
                        <p className="mb-0 text-white"><a className="text-white" href="#">Home</a>  /  <span className="text-success">About Us</span></p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )


};

export default InnerHeader;