const Customer = require("../models/customer.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config();


exports.login = async (req,res) => {

    var email = req.body.email;
    var password  = req.body.password;

    var customer = await Customer.findOne({ email : email });
    if(!customer) return res.status(400).send("email not found.");

    var validPassword = await bcrypt.compare(req.body.password,customer.password);
    if(!validPassword) return res.status(400).send("password invalid");

    const token = jwt.sign({"_id" : customer._id , email : customer.email },process.env.TOKEN_SECRET);

    return res.header({'api-token' : token}).status(200).send(token);

};


exports.register = async (req,res) => {

    //validate requests

    //checking user already registered
    const emailExist = await Customer.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send("Email already exists");

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    const customer = new Customer({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        mobile: req.body.mobile,
        password : hashedPassword
    });

    try{
        const savedCustomer = await customer.save();
        res.status(200).send(savedCustomer)
    }catch(err) {
        res.status(400).send(err)
    }

};

exports.logout = (req,res) => {


};
