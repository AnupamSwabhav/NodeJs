const uuid = require("uuid")

class ContactDetail {
    constructor(contactID, type) {
        this.id = uuid.v4()
        this.contactID = contactID
        this.type = type
    }
}

module.exports = ContactDetail