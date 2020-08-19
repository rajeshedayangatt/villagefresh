import React from "react";

const Copyright = () => {

    return(

        <section className="pt-4 pb-4 footer-bottom">
        <div className="container">
           <div className="row no-gutters">
              <div className="col-lg-6 col-sm-6">
                 <p className="mt-1 mb-0">&copy; Copyright 2020 <strong className="text-dark">Groci</strong>. All Rights Reserved<br />
                 <small className="mt-0 mb-0">Made with <i className="mdi mdi-heart text-danger"></i> by <a href="https://askbootstrap.com/" target="_blank" className="text-primary">Ask Bootstrap</a>
                 </small>
                 </p>
              </div>
              <div className="col-lg-6 col-sm-6 text-right">
                 <img alt="osahan logo" src="https://askbootstrap.com/preview/groci/img/payment_methods.png" />
              </div>
           </div>
        </div>
     </section>
    )

}

export default Copyright;