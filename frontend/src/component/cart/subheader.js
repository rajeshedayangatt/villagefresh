import React from "react";

const SubHeader = () => {
    return(

        <section className="pt-3 pb-3 page-info section-padding border-bottom bg-white">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <a href="#"><strong><span className="mdi mdi-home"></span> Home</strong></a> <span className="mdi mdi-chevron-right"></span> <a href="#">Cart</a>
                </div>
            </div>
            </div>
        </section>

    )
}

export default SubHeader;