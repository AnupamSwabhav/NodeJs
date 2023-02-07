const express = require("express")
const userRoute  = require("./controller/user")
const bodyParser = require("body-parser")
const { AllUser } = require("./view/user")
const { JWTToken } = require("./middleware/authentication")
const connectToDatabase = require("./db")
const PORT = 8085
const app = express()
app.use(bodyParser.json())

app.use("/", userRoute)

connectToDatabase.connectToDatabase()

app.post('/login/:fName', (req, resp) => {
    console.log("inside login")
    const fName = req.params.fName
    console.log("fname",fName,AllUser[0].fName)
    let user = null
    for(let i=0;i<AllUser.length;i++){
        if( fName == AllUser[i].fName){
            user = AllUser[i]
            break
        }
    }
    if (user) {
        let jwtToken = new JWTToken(user)
        let newToken = jwtToken.createToken()
        console.log("token",newToken)
        resp.cookie("token", newToken)
        return resp.status(201).send(user)
    }else {
        return resp.status(400).send("user not exit")
    }
})


app.listen(PORT, () => {
    console.log("port started on ",PORT)
})

