require("dotenv").config()
let express = require("express")
const ConnectDB = require("./configs/db")
let app = express()
let PORT = process.env.PORT || 3000
app.use(express.json())

ConnectDB()

app.get("/", (req, res)=>{
    res.send("Welcome to Educase India")
})

app.listen(PORT, ()=>{
    console.log(`API is running on Port ${PORT}`)
})