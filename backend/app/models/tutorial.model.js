const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tutorialSchema = new Schema( {
    title : String,
    description : String,
    published : Boolean
},
{
    timestamps : true
});

module.exports = mongoose.model('Tutorial',tutorialSchema);