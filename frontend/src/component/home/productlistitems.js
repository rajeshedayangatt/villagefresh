import React from "react";

const ProductlistItems = (props) => {


    return(
        <div className="col-md-3 mt-5 product_list_items" >
            <div className="mr-2">
                <img src={props.product.image} alt="no image" />
                <br />

                <div className="d-block">
                <h5>{props.product.name}</h5>

                </div>

                <div className="d-block">

                <span className="old_price">{props.product.old_price}</span>
                <span className="ml-2"> <b>{props.product.current_price}</b></span>
                </div>
                <div className="d-block">

                <button >Add to cart</button>

                </div>

            </div>
        </div>
    )

}

export default ProductlistItems;