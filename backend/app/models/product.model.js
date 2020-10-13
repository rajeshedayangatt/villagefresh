const mongoose = require("mongoose");

const purchaseTypeSchema = mongoose.Schema({
    title : String,
    base_price : Number,
    discounted_price : Number,
    quantity : Number,
    image : String
});

const reviewSchema = mongoose.Schema({
    description : String,
    rating : Number
});

const productSchema = mongoose.Schema(
    {
        sku : String,
        title : String,
        description : String,
        purchase_type : [purchaseTypeSchema],
        offer_title : String,
        category_id : String,
        reviews : [reviewSchema],
        delivery_information : String,
        similiary_products : [],
        created : Date,
        updated : Date

    }
);

module.exports = mongoose.model("Product",productSchema);