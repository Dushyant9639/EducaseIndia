let express = require("express")
const addSchool = require("../controllers/AddSchool")
const listSchool = require("../controllers/ListSchool")
let schoolRouter = express.Router()

schoolRouter.post("/addSchool", addSchool)
schoolRouter.get("/listSchools", listSchool)
module.exports = schoolRouter