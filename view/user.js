const uuid = require("uuid")
const { addUser } = require("../service/user")
const Contact = require("./contact")
const db = require("../models")
const user = require("../models/user")

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

    static async createUser(user1, transaction) {
        try {
            console.log("inside add user view")
            const user = await db.User.create(user1, { transaction: transaction })
            return user
        } catch (error) {
            console.log("error===>", error)
            throw Error("databse error")
        }
    }

}

module.exports = { User, AllUser }