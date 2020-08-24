const User = require("../models/user.model");

//register user 
exports.register = (req,res) => {

    const user  = new User({

        email : req.body.email,
        password : req.body.password

    });

    user
    .save(user)
    .then(data => {
        res.json({
            status : "success",
            response : data,
            message : "Successfully registered"
        })
    }).catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
    });
};

//login user
exports.login = (req,res) => {

    var email = req.body.email;
    var password = req.body.password;


    User.find({
        email : email,
        password : password
    }).then(data => {

        //generate token 

        require('crypto').randomBytes(10, function(err, buffer) {
            var token = buffer.toString('hex');
            var userid = data[0]._id;
            User.update({_id : data[0]._id } , { token : token, refreshToken : token  })
                .then(response => {
                    User.findById(userid)
                        .then((userdata => {
                                res.json({
                                    status : "success",
                                    response : userdata.token,
                                    message : "Successfully logined"
                                });
                        }))
                }).catch(err => {
                    res.status(500).send({
                      message:
                        err.message || "Some error occurred while token generate."
                    });
                });
                //update token id user 

        });




    }).catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while login the User."
        });
    });
}


//Get user details
exports.details = (req,res) => {


    if (!req.headers.authorization) {

        res.status(401).json({
            status : "failed",
            response : {},
            message : "Missing Authorization Header"
        });
    }else{

        var tokeid = req.headers.authorization;
        tokeid = tokeid.replace(/['"]+/g, '');

        User.find({
            token : tokeid
        }).then((response) => {
            console.log("response",response)

            res.status(200).json({
                status : "success",
                response : response[0],
                message : ""
            });

        })
    }

};