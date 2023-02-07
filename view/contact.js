const uuid = require("uuid")

class Contact {
     constructor(userID) {
        this.id = uuid.v4()
        this.userID = userID
        this.isActive = true
        this.contactDetail = []
     }
}

module.exports = Contact