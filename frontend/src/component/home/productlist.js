import React from "react";
import ProductlistItems from "./productlistitems";

const list = [
    { id : 1 , name : "Organic Sweet Corn" , slug_url : 'organic-sweet-corn' , old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/corn.png' , stock_status : true , weight : '1kg'},
    { id : 2 , name : "Gold Creamer Potato" , slug_url : 'organic-gold-creamer-potatoes', old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/potato.png' , stock_status : true , weight : '1kg'},
    { id : 3 , name : "Native Organic Papaya" , slug_url : 'native-organic-papaya', old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/papaya.png' , stock_status : true , weight : '1kg'},
    { id : 4 , name : "Fresh Red Seedles" , slug_url : 'fresh-red-seedless-grapes', old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/seedles.png' , stock_status : true , weight : '1kg'},
    { id : 5 , name : "Green Seedles Grapes" , slug_url : 'green-seedless-grapes', old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/green_grapes.png' , stock_status : true , weight : '1kg'},
    { id : 6 , name : "Orange Grape Tomatoes" , slug_url : 'organic-grape-tomatoes', old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/tomatoes.png' , stock_status : true , weight : '1kg'},
    { id : 7 , name : "Organic Broccoli" , slug_url : 'organic-broccoli', old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/broccoli.png' , stock_status : true , weight : '1kg'},
    { id : 8 , name : "Washed Sugar Peas" , slug_url : 'washed-sugar-snap-peas', old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/corn.png' , stock_status : true , weight : '1kg'},
];

const ProductList = () => {

    return (
        // <div classNameName="row">
        // {
        //     list.map( val => {
        //         return  <ProductlistItems key={val.id} product={val}  />
        //     })
        // }
        // </div>

        <section className="product-items-slider section-padding">
         <div className="container">
            <div className="section-header">
               <h5 className="heading-design-h5">Top Savers Today <span className="badge badge-primary">20% OFF</span>
                  <a className="float-right text-secondary" href="https://askbootstrap.com/preview/groci/shop.html">View All</a>
               </h5>
            </div>
            <div className="owl-carousel owl-carousel-featured">
               <div className="item">
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
               <div className="item">
                  <div className="product">
                     <a href="https://askbootstrap.com/preview/groci/single.html">
                        <div className="product-header">
                           <span className="badge badge-success">50% OFF</span>
                           <img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/2.jpg" alt="" />
                           <span className="non-veg text-danger mdi mdi-circle"></span>
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
               <div className="item">
                  <div className="product">
                     <a href="https://askbootstrap.com/preview/groci/single.html">
                        <div className="product-header">
                           <span className="badge badge-success">50% OFF</span>
                           <img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/3.jpg" alt="" />
                           <span className="non-veg text-danger mdi mdi-circle"></span>
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
               <div className="item">
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
               <div className="item">
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
               <div className="item">
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
         </div>
      </section>
    )


};

export default ProductList;