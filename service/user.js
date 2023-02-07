const db = require("../models")
const { User } = require("../view/user")

exports.addUser = async function (user) {
    try {
        // managed transaction.
        const result = await db.sequelize.transaction(async (transaction) => {
    
            console.log("inside service")
          // add
          await User.createUser(user, transaction)
        })
        console.log(result);
      } catch (error) {
        console.log("error =====>",error)
        throw Error("while interserting data")
      }
}