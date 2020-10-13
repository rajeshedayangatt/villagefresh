const mongoose = require("mongoose");


var cartSchema = mongoose.Schema(
    {
        customer_id : ObjectId,
        token : String,
        product_id : String,
        purchase_type_id : ObjectId,
        quantity : Number,
        status : Boolean,
        created : Date,
        updated : Date
    }
);


module.exports = mongoose.model("Cart",cartSchema);
