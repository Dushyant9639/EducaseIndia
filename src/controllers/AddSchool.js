const SchoolModel = require("../models/SchoolModel");

let addSchool = async (req, res) => {
  try {
    let { name, address, latitude, longitude } = req.body;
    if (!name || !address || !latitude || !longitude) {
      return res.status(404).json({ message: "All Fields are required!!" });
    } else if (typeof latitude !== "number" || typeof longitude !== "number") {
      return res
        .status(400)
        .json({ message: "Type of Latitude and longitude should be Number" });
    } else {
      let school = await SchoolModel.create({
        name,
        address,
        latitude,
        longitude,
      });
      res.status(201).json({ message: "School Added Succesfully!!", school });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in Adding School", error: error.message });
  }
};
module.exports = addSchool;
