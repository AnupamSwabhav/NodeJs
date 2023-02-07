const jwt = require("jsonwebtoken")
const secretKey = "Anupam"

class JWTToken {
    constructor(user) {
        this.fname = user.fName
        this.lname = user.lName
        this.isAdmin = user.isAdmin
        this.isValid = true
    }

    createToken () {
         return jwt.sign(JSON.stringify(this),secretKey)
    }
    static isValidateToken(req, resp) {
        console.log("inside isvalid token")
        let cookie = req.cookies.token
        console.log("cookie",cookie)
        return jwt.verify(cookie, secretKey)


    }
}

module.exports = { JWTToken , secretKey}