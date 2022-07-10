const express = require("express")

const router = express.Router();
const { registerEmployee } = require("../controller/employeeController")


router.route("/").get((req, res) => {
	res.send("In employee route")
})

router.route("/register-employee").post(registerEmployee)





module.exports = router