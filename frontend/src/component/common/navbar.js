import React from "react";
import {Link} from "react-router-dom";
  
const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-light osahan-menu-2 pad-none-mobile">
         <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarText">
               <ul className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto">
                  <li className="nav-item">
                     <a className="nav-link shop" href="index.html"><span className="mdi mdi-store"></span> Super Store</a>
                  </li>
				          <li className="nav-item">
                     <Link to="/" className="nav-link">Home</Link>
                  </li>
				          <li className="nav-item">
                      <Link to="/about" className="nav-link">About Us</Link>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="https://askbootstrap.com/preview/groci/shop.html">Fruits & Vegetables</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="https://askbootstrap.com/preview/groci/shop.html">Grocery & Staples</a>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Pages
                     </a>
                     <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/shop" ><i className="mdi mdi-chevron-right" aria-hidden="true"></i> Shop Grid</Link>
                        <Link className="dropdown-item" to="/product/organic-sweet-corn" ><i className="mdi mdi-chevron-right" aria-hidden="true"></i> Single Product</Link>
                        <Link className="dropdown-item" to="/cart" ><i className="mdi mdi-chevron-right" aria-hidden="true"></i> Shopping Cart</Link>
                        <Link className="dropdown-item" to="/checkout" ><i className="mdi mdi-chevron-right" aria-hidden="true"></i> Checkout</Link> 
                     </div>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     My Account
                     </a>
                     <div className="dropdown-menu">
                        <a className="dropdown-item" href="https://askbootstrap.com/preview/groci/my-profile.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i>  My Profile</a>
                        <a className="dropdown-item" href="https://askbootstrap.com/preview/groci/my-address.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i>  My Address</a>
                        <a className="dropdown-item" href="https://askbootstrap.com/preview/groci/wishlist.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i>  Wish List </a>
                        <a className="dropdown-item" href="https://askbootstrap.com/preview/groci/orderlist.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i>  Order List</a> 
                     </div>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Blog Page
                     </a>
                     <div className="dropdown-menu">
                        <a className="dropdown-item" href="https://askbootstrap.com/preview/groci/blog.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i> Blog</a>
                        <a className="dropdown-item" href="https://askbootstrap.com/preview/groci/blog-detail.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i> Blog Detail</a>
                     </div>
                  </li>
				          <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     More Pages
                     </a>
                     <div className="dropdown-menu">
                        <a className="dropdown-item" href="https://askbootstrap.com/preview/groci/about.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i>  About Us</a>
                        <a className="dropdown-item" href="https://askbootstrap.com/preview/groci/contact.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i>  Contact Us</a>
                        <a className="dropdown-item" href="https://askbootstrap.com/preview/groci/faq.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i>  FAQ </a>
                        <a className="dropdown-item" href="https://askbootstrap.com/preview/groci/not-found.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i>  404 Error</a> 
                     </div>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="https://askbootstrap.com/preview/groci/contact.html">Contact</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
    )

};

export default Navbar;