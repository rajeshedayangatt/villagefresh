const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOption = {
    origin : 'http://localhost:3000'
}

app.use(cors(corsOption));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended : true}));


const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log("Connected to database");
    })
    .catch(err => {
        console.log("Failed to connect",err);
        process.exit();
    });


app.get("/" , (req,res) => {

    res.json({ message : "Welcome to villagefresh"});

});

// require("./app/routes/tutorial.routes")(app);
var userRoute = require("./app/routes/user.routes");
app.use("/api/user",userRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}.`);
})