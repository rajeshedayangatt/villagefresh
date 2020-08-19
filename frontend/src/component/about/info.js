import React from "react";

const Info = () => {

    return(
        <section className="section-padding bg-white">
        <div className="container">
           <div className="row">
              <div className="pl-4 col-lg-5 col-md-5 pr-4">
                 <img className="rounded img-fluid" src="https://askbootstrap.com/preview/groci/img/about.jpg" alt="Card image cap" />
              </div>
              <div className="col-lg-6 col-md-6 pl-5 pr-5">
                 <h2 className="mt-5 mb-5 text-secondary">Save more with GO! We give you the lowest prices on all your grocery needs.</h2>
                 <h5 className="mt-2">Our Vision</h5>
                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
                 <h5 className="mt-4">Our Goal</h5>
                 <p>When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, Lorem Ipsum has been the industry's standard dummy text ever since.</p>
              </div>
           </div>
        </div>
     </section>
    )


};

export default Info;