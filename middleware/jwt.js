const jwt = require("jsonwebtoken");
const { secretKey } = require("./authentication");


const verifyToken = (req, resp, next) => {
    console.log("request",req.headers.cookie)
    const token = req.headers.cookie;
    var temptoken = token.split("=")
    if (!token) {
        return resp.status(403).send("A token is required for authentication");
    }

    const decode = jwt.verify(temptoken[1], secretKey)
    if (!decode.isValid){
        return resp.status(401).send("Invalid Token")
    }
    return next()
}

module.exports = verifyToken