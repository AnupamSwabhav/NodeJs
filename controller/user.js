const express = require("express")
const bodyParser = require("body-parser")
const {User, AllUser} = require("../view/user")
const userRoute = express.Router()
 


const auth = require("../middleware/jwt")
const { addUser } = require("../service/user")

// userRoute.use(bodyParser.json())

userRoute.post('/user', (req, resp) => {
    let {fName, lName, isAdmin} = req.body
    let tempuser = new User(fName,lName,isAdmin)
    console.log("req body",req.body, tempuser)
    addUser(tempuser)
    // AllUser.push(tempuser)

    return resp.status(200).send("user succesfully added")

})

// get all user
userRoute.get('/user', auth, (req,resp) => {
    console.log("all user",AllUser)
    return resp.status(200).send(AllUser)
})


// deleted one user by id with auth
userRoute.delete('/user/:userID', auth, (req, resp) => {
    const userID = req.params.userID
    let index = null
    for(let i=0;i<AllUser.length;i++){
        if(userID == AllUser[i].id){
            index = i
            AllUser.splice(i,1)
            break;
        }
    }
    console.log("test",index)
    if(index == null){
        return  resp.status(400).send("user not exit")
    }
    console.log("total user",AllUser)
    return resp.status(200).send("User successfully deleted")
})

// update one user by id
userRoute.put('/user/:userID', auth, (req, resp) => {
    const userID = req.params.userID
    let {fName,lName,isAdmin} = req.body
    let index = null
    for(let i=0;i<AllUser.length;i++){
        if(userID == AllUser[i].id){
            AllUser[i].fName = fName
            AllUser[i].lName = lName
            AllUser[i].isAdmin = isAdmin
            index = i
            break;
        }
    }
    if( index == null){
     return  resp.status(400).send("user not exit")
    }
   return  resp.status(200).send(AllUser[index])
})

module.exports = userRoute