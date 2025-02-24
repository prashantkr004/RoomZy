const User = require("../models/Usermodel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const userTokenAuth = async (req, res, next) => {
    try {

        // Retrieve token from Authorization header
        const {token} = req.cookies;
        
        if (!token) {
            return res.status(401).send("Access denied. No token provided.");
        }

        // Verify the token
        const decodedData = jwt.verify(token, JWT_SECRET);
        
        // console.log(decodedData);
        
        if (!decodedData) {
            return res.status(401).send("Invalid token.");
        }

        // Attach user data to the request object
        req.user = decodedData;
        
        next();
    } catch (err) {
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).send("Invalid token.");
        } else if (err.name === 'TokenExpiredError') {
            return res.status(401).send("Token has expired.");
        }
        res.status(400).send("ERROR: " + err.message);
    }
};

module.exports = { userTokenAuth };

