const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;


console.log(dbConfig)
const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;

module.exports =db;