const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        first_name : String,
        last_name : String,
        phone : Number,
        email : String,
        country : String,
        state : String,
        city : String,
        zip : Number,
        address : String,
        password : String,
        token : String,
        refreshToken : String

    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model('User',userSchema);
