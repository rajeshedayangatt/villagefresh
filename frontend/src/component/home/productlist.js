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