const mongoose = require("mongoose");

var orderDetailsSchema = mongoose.Schema({

    product_sku : String,
    purchase_type_id : ObjectId,
    quantity : Number

});

var orderSchema = mongoose.Schema({
    customer_id : ObjectId,
    billing_address : {
        street_address1 : String,
        street_address2 : String,
        town : String,
        city : String,
        state : String,
        postalcode :Number,
        phone : Number,
        email : String
    },
    shipping_address : {
        street_address1 : String,
        street_address2 : String,
        town : String,
        city : String,
        state : String,
        postalcode :Number,
        phone : Number,
        email : String
    },
    payment_status : Boolean,
    delivery_Status : Boolean,
    order_details : [orderDetailsSchema],
    created : Date

});

module.exports = mongoose.model("Order",orderSchema);