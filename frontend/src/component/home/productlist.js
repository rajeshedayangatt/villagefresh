import React from "react";
import ProductlistItems from "./productlistitems";

const list = [
    { id : 1 , name : "Organic Sweet Corn" , old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/corn.png' , stock_status : true , weight : '1kg'},
    { id : 2 , name : "Gold Creamer Potato" , old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/potato.png' , stock_status : true , weight : '1kg'},
    { id : 3 , name : "Native Organic Papaya" , old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/papaya.png' , stock_status : true , weight : '1kg'},
    { id : 4 , name : "Fresh Red Seedles" , old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/seedles.png' , stock_status : true , weight : '1kg'},
    { id : 5 , name : "Green Seedles Grapes" , old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/green_grapes.png' , stock_status : true , weight : '1kg'},
    { id : 6 , name : "Orange Grape Tomatoes" , old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/tomatoes.png' , stock_status : true , weight : '1kg'},
    { id : 7 , name : "Organic Broccoli" , old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/broccoli.png' , stock_status : true , weight : '1kg'},
    { id : 8 , name : "Washed Sugar Peas" , old_price : '$18.00' , current_price : '$14.99' , image : '/assets/images/products/corn.png' , stock_status : true , weight : '1kg'},

];

const ProductList = () => {

    return (
        <div className="row">
        {
            list.map( val => {
                return  <ProductlistItems key={val.id} product={val}  />
            })
        }
        </div>
    )


};

export default ProductList;