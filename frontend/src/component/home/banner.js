import React from "react";


const Banner = () => {
    return(

        <section className="carousel-slider-main text-center border-top border-bottom bg-white">
         <div className="owl-carousel owl-carousel-slider">
            <div className="item">
               <a href="https://askbootstrap.com/preview/groci/shop.html"><img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/slider/slider1.jpg" alt="First slide" /></a>
            </div>
            <div className="item">
               <a href="https://askbootstrap.com/preview/groci/shop.html"><img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/slider/slider2.jpg" alt="First slide" /></a>
            </div>
			<div className="item">
               <a href="https://askbootstrap.com/preview/groci/shop.html"><img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/slider/slider1.jpg" alt="First slide" /></a>
            </div>
            <div className="item">
               <a href="https://askbootstrap.com/preview/groci/shop.html"><img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/slider/slider2.jpg" alt="First slide" /></a>
            </div>
         </div>
        </section>


    )
};

export default Banner;