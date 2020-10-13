const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var customerSchema = new Schema({
    first_name : String,
    last_name : String,
    email : String,
    mobile : Number,
    display_name : String,
    password :String,
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
    token : String,
    refreshToken :String
  
},
{
    timestamps : true
}

);

module.exports = mongoose.model("Customer",customerSchema);