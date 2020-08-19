import React from "react";

const ProductList = () => {
    return(
       
        <div className="col-md-9">
                  <a href="#"><img className="img-fluid mb-3" src="https://askbootstrap.com/preview/groci/img/shop.jpg" alt="" /></a>
                  <div className="shop-head">
                     <a href="#"><span className="mdi mdi-home"></span> Home</a> <span className="mdi mdi-chevron-right"></span> <a href="#">Fruits & Vegetables</a> <span className="mdi mdi-chevron-right"></span> <a href="#">Fruits</a>
                     <div className="btn-group float-right mt-2">
                        <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by Products &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                           <a className="dropdown-item" href="#">Relevance</a>
                           <a className="dropdown-item" href="#">Price (Low to High)</a>
                           <a className="dropdown-item" href="#">Price (High to Low)</a>
                           <a className="dropdown-item" href="#">Discount (High to Low)</a>
                           <a className="dropdown-item" href="#">Name (A to Z)</a>
                        </div>
                     </div>
                     <h5 className="mb-3">Fruits</h5>
                  </div>
                  <div className="row no-gutters">
                     <div className="col-md-4">
                        <div className="product">
                           <a href="https://askbootstrap.com/preview/groci/single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/1.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer">
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                                 <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">$800.99</span></p>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="product">
                           <a href="https://askbootstrap.com/preview/groci/single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/2.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer">
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                                 <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">$800.99</span></p>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="product">
                           <a href="https://askbootstrap.com/preview/groci/single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/3.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer">
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                                 <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">$800.99</span></p>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="row no-gutters">
                     <div className="col-md-4">
                        <div className="product">
                           <a href="https://askbootstrap.com/preview/groci/single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/4.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer">
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                                 <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">$800.99</span></p>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="product">
                           <a href="https://askbootstrap.com/preview/groci/single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/5.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer">
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                                 <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">$800.99</span></p>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="product">
                           <a href="https://askbootstrap.com/preview/groci/single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/6.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer">
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                                 <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">$800.99</span></p>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="row no-gutters">
                     <div className="col-md-4">
                        <div className="product">
                           <a href="https://askbootstrap.com/preview/groci/single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/7.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer">
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                                 <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">$800.99</span></p>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="product">
                           <a href="https://askbootstrap.com/preview/groci/single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/8.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer">
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                                 <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">$800.99</span></p>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="product">
                           <a href="https://askbootstrap.com/preview/groci/single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/9.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer">
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
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
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active">
                           <span className="page-link">
                           2
                           <span className="sr-only">(current)</span>
                           </span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                           <a className="page-link" href="#">Next</a>
                        </li>
                     </ul>
                  </nav>
               </div>

    )
}

export default ProductList;