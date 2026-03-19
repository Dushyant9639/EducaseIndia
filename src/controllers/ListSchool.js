const SchoolModel = require("../models/SchoolModel")
function CalculateDistance(lat1, long1, lat2, long2){
    let toRad = (value)=> (value*Math.PI)/180
    let R = 6371
    let dLat = toRad(lat2-lat1)
    let dLong = toRad(long2-long1)
    let a = Math.sin(dLat/2)*Math.sin(dLat/2)+ Math.cos(toRad(lat1)) *Math.cos(toRad(lat2))*Math.sin(dLong/2)*Math.sin(dLong/2)
    let c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return R*c
}
let listSchool = async(req, res)=>{
    try {
        let {latitude, longitude} = req.query
        if(!latitude || !longitude){
            return res.status(404).json({message:"Users Latitude and Longitude are missing.."})
        }else{
            let schools = await SchoolModel.find()
            let sortedSchools = schools.map((school)=>{ let distance = CalculateDistance(latitude,longitude, school.latitude, school.longitude) 
                return{
                    ...school._doc,
                    distance:distance
                }
            }).sort((a,b)=>a.distance -b.distance)

            res.status(200).json({message:"List of Schools fetched Succesfully!!", sortedSchools})
        }
    } catch (error) {
        res.status(500).json({message:"Error in fetching the Schools", error:error.message})
    }
}

module.exports = listSchool