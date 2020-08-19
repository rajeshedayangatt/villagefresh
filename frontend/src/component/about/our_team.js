import React from "react";

const OurTeam = () => {

    return(

        <section className="section-padding bg-white">
         <div className="section-title text-center mb-5">
            <h2>Our Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-md-4">
                  <div className="team-card text-center">
                     <img className="img-fluid mb-4" src="https://askbootstrap.com/preview/groci/img/user/1.jpg" alt="" />
                     <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                     <h6 className="mb-0 text-success">- Stave Martin</h6>
                     <small>Manager</small>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4">
                  <div className="team-card text-center">
                     <img className="img-fluid mb-4" src="https://askbootstrap.com/preview/groci/img/user/2.jpg" alt="" />
                     <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                     <h6 className="mb-0 text-success">- Mark Smith</h6>
                     <small>Designer</small>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4">
                  <div className="team-card text-center">
                     <img className="img-fluid mb-4" src="https://askbootstrap.com/preview/groci/img/user/3.jpg" alt="" />
                     <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                     <h6 className="mb-0 text-success">- Ryan Printz</h6>
                     <small>Marketing</small>
                  </div>
               </div>
            </div>
         </div>
      </section>
    )

}

export default OurTeam;