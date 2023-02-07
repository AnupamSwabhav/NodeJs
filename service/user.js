const User = require("../models/user.js");

exports.addUser = async function (user) {

    try {
        var users = User.create(user)
        return users;
    } catch (e) {
        // Log Errors
        console.log("er=============>",e)
        throw Error('Error while database insert Users')
    }
}