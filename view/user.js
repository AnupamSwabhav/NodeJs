const uuid = require("uuid")
const { addUser } = require("../service/user")
const Contact = require("./contact")
const AllUser = []
class User {
    constructor(fName, lName, isAdmin) {
        this.id = uuid.v4()
        this.firstName = fName
        this.lastName = lName
        this.isAdmin = isAdmin
        this.isActive = true
        this.contact = new Contact(this.id)
    }

}

module.exports = {User, AllUser}