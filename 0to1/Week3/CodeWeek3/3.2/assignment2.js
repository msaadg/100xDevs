// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://admin:melIMNJefhE7t0t0@cluster0.bulkj26.mongodb.net/user_app");

// const User = mongoose.model("users", {
//     name : String,
//     username : String,
//     password : String
// });

// const user = new User({
//     name : "saad",
//     username : "msaad",
//     password : "123"
// });

// user.save();


const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://admin:melIMNJefhE7t0t0@cluster0.bulkj26.mongodb.net/user_app",
);

const User = mongoose.model("Users", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

async function userExists(username, password) {
    // should check in the database
    const user = await User.findOne({username: username});
    return user !== null;
}

app.post("/signup", async function (req, res) {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    
    // check if user exists in the database
    // if yes, return error
    // if no, create a new user in the database

    if (await userExists(username, password)) {
        return res.status(400).json({
            msg: "User already exists",
        });
    }
    
    const user = new User({
        name,
        username,
        password,
    });
    
    await user.save();
    
    return res.json({
        msg: "User created",
    });
});

app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!(await userExists(username, password))) {
        return res.status(403).json({
            msg: "User doesnt exist in our db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", async function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username from the database
        return res.json({
            users : await User.find({username: {$ne: username}})
        });
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);