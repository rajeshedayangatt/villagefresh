const Product = require("../models/product.model");

exports.lists = async (req,res) => {

    var products = Product.find();
    if(!products) return res.status(400).send("No products available");

    return res.status(200).send(products);

};

exports.store = async (req,res) => {

    

    var productObj =new Product({
        sku : req.body.product_sku,
        title : req.body.product_title,
        description : req.body.product_description,
        purchase_type : req.body.product_purchase_type,
        offer_title : req.body.offer_title,
        category_id : req.body.category_id,
        delivery_information : req.body.delivery_information,
        created : Date()
    });

    try{

        const product = await productObj.save();
        res.status(200).send(product);

    }catch(err) {

        return res.status(400).send(err);

    }
    
}