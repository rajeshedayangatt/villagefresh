import React from "react";

const Content = () => {

    return(
      
      <section className="account-page section-padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-9 mx-auto">
                  <div className="row no-gutters">
                     <div className="col-md-4">
                        <div className="card account-left">
                           <div className="user-profile-header">
                              <img alt="logo" src="https://askbootstrap.com/preview/groci/img/user/1.jpg" />
                              <h5 className="mb-1 text-secondary"><strong>Hi </strong> OSAHAN</h5>
                              <p> +91 8568079956</p>
                           </div>
                           <div className="list-group">
                              <a href="https://askbootstrap.com/preview/groci/my-profile.html" className="list-group-item list-group-item-action"><i aria-hidden="true" className="mdi mdi-account-outline"></i>  My Profile</a>
                              <a href="https://askbootstrap.com/preview/groci/my-address.html" className="list-group-item list-group-item-action"><i aria-hidden="true" className="mdi mdi-map-marker-circle"></i>  My Address</a>
                              <a href="wishlist.html" className="list-group-item list-group-item-action active"><i aria-hidden="true" className="mdi mdi-heart-outline"></i>  Wish List </a>
                              <a href="https://askbootstrap.com/preview/groci/orderlist.html" className="list-group-item list-group-item-action"><i aria-hidden="true" className="mdi mdi-format-list-bulleted"></i>  Order List</a> 
                              <a href="#" className="list-group-item list-group-item-action"><i aria-hidden="true" className="mdi mdi-lock"></i>  Logout</a> 
                           </div>
                        </div>
                     </div>
                     <div className="col-md-8">
                        <div className="card card-body account-right">
                           <div className="widget">
                              <div className="section-header">
                                 <h5 className="heading-design-h5">
                                    Wishlist
                                 </h5>
                              </div>
                              <div className="row no-gutters">
                                 <div className="col-md-6">
                                    <div className="product">
                                       <a href="#">
                                          <div className="product-header">
                                             <span className="badge badge-success">50% OFF</span>
                                             <img alt="" src="https://askbootstrap.com/preview/groci/img/item/1.jpg" className="img-fluid" />
                                             <span className="veg text-success mdi mdi-circle"></span>
                                          </div>
                                          <div className="product-body">
                                             <h5>Product Title Here</h5>
                                             <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                          </div>
                                          <div className="product-footer">
                                             <button className="btn btn-secondary btn-sm float-right" type="button"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                                             <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">$800.99</span></p>
                                          </div>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="product">
                                       <a href="#">
                                          <div className="product-header">
                                             <span className="badge badge-success">50% OFF</span>
                                             <img alt="" src="https://askbootstrap.com/preview/groci/img/item/2.jpg" className="img-fluid" />
                                             <span className="veg text-success mdi mdi-circle"></span>
                                          </div>
                                          <div className="product-body">
                                             <h5>Product Title Here</h5>
                                             <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                          </div>
                                          <div className="product-footer">
                                             <button className="btn btn-secondary btn-sm float-right" type="button"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                                             <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">$800.99</span></p>
                                          </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div className="row no-gutters">
                                 <div className="col-md-6">
                                    <div className="product">
                                       <a href="#">
                                          <div className="product-header">
                                             <span className="badge badge-success">50% OFF</span>
                                             <img alt="" src="https://askbootstrap.com/preview/groci/img/item/9.jpg" className="img-fluid" />
                                             <span className="veg text-success mdi mdi-circle"></span>
                                          </div>
                                          <div className="product-body">
                                             <h5>Product Title Here</h5>
                                             <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                          </div>
                                          <div className="product-footer">
                                             <button className="btn btn-secondary btn-sm float-right" type="button"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                                             <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">$800.99</span></p>
                                          </div>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="product">
                                       <a href="#">
                                          <div className="product-header">
                                             <span className="badge badge-success">50% OFF</span>
                                             <img alt="" src="https://askbootstrap.com/preview/groci/img/item/5.jpg" className="img-fluid" />
                                             <span className="veg text-success mdi mdi-circle"></span>
                                          </div>
                                          <div className="product-body">
                                             <h5>Product Title Here</h5>
                                             <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                          </div>
                                          <div className="product-footer">
                                             <button className="btn btn-secondary btn-sm float-right" type="button"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                                             <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">$800.99</span></p>
                                          </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
							  <nav>
								 <ul className="pagination justify-content-center mt-4">
									<li className="page-item disabled">
									   <span className="page-link">Previous</span>
									</li>
									<li className="page-item"><a href="#" className="page-link">1</a></li>
									<li className="page-item active">
									   <span className="page-link">
									   2
									   <span className="sr-only">(current)</span>
									   </span>
									</li>
									<li className="page-item"><a href="#" className="page-link">3</a></li>
									<li className="page-item">
									   <a href="#" className="page-link">Next</a>
									</li>
								 </ul>
							  </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    )

};


export default Content;