import React from "react";

const Footer = () => {

    return(
        <section className="section-padding footer bg-white border-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <h4 className="mb-5 mt-0"><a className="logo" href="index.html"><img src="https://askbootstrap.com/preview/groci/img/logo-footer.png" alt="Groci" /></a></h4>
                        <p className="mb-0"><a className="text-dark" href="#"><i className="mdi mdi-phone"></i> +61 525 240 310</a></p>
                        <p className="mb-0"><a className="text-dark" href="#"><i className="mdi mdi-cellphone-iphone"></i> 12345 67890, 56847-98562</a></p>
                        <p className="mb-0"><a className="text-success" href="#"><i className="mdi mdi-email"></i> iamosahan@gmail.com</a></p>
                        <p className="mb-0"><a className="text-primary" href="#"><i className="mdi mdi-web"></i> www.askbootstrap.com</a></p>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <h6 className="mb-4">TOP CITIES </h6>
                        <ul>
                            <li><a href="#">New Delhi</a></li>
                            <li><a href="#">Bengaluru</a></li>
                            <li><a href="#">Hyderabad</a></li>
                            <li><a href="#">Kolkata</a></li>
                            <li><a href="#">Gurugram</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <h6 className="mb-4">CATEGORIES</h6>
                        <ul>
                            <li><a href="#">Vegetables</a></li>
                            <li><a href="#">Grocery & Staples</a></li>
                            <li><a href="#">Breakfast & Dairy</a></li>
                            <li><a href="#">Soft Drinks</a></li>
                            <li><a href="#">Biscuits & Cookies</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <h6 className="mb-4">ABOUT US</h6>
                        <ul>
                            <li><a href="#">Company Information</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Store Location</a></li>
                            <li><a href="#">Affillate Program</a></li>
                            <li><a href="#">Copyright</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <h6 className="mb-4">Download App</h6>
                        <div className="app">
                            <a href="#"><img src="https://askbootstrap.com/preview/groci/img/google.png" alt="" /></a>
                            <a href="#"><img src="https://askbootstrap.com/preview/groci/img/apple.png" alt="" /></a>
                        </div>
                        <h6 className="mb-3 mt-4">GET IN TOUCH</h6>
                        <div className="footer-social">
                            <a className="btn-facebook" href="#"><i className="mdi mdi-facebook"></i></a>
                            <a className="btn-twitter" href="#"><i className="mdi mdi-twitter"></i></a>
                            <a className="btn-instagram" href="#"><i className="mdi mdi-instagram"></i></a>
                            <a className="btn-whatsapp" href="#"><i className="mdi mdi-whatsapp"></i></a>
                            <a className="btn-messenger" href="#"><i className="mdi mdi-facebook-messenger"></i></a>
                            <a className="btn-google" href="#"><i className="mdi mdi-google"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Footer;