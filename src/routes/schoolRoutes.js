let express = require("express")
const addSchool = require("../controllers/AddSchool")
let schoolRouter = express.Router()

schoolRouter.post("/add-school", addSchool)

module.exports = schoolRouter