
var bcrypt = require('bcryptjs');
const Employee = require("../models/Employee")


const registerEmployee = (req, res) => {


const { username, password, dateOfBirth, city, state, mobile, address, pinCode} 
	= req.body		

   bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, async function(err, hash) {
   			await Employee.create({
   				username,
   				password: hash,
   				dateOfBirth,
   				city,
   				state,
   				mobile,
                address,
                pinCode,
   			})

   			return res.json({
   				message: "Employee created successfully!"
   			})
    });
   });

 	

}

module.exports = {
	registerEmployee
}




   // bcrypt.compare("mari1234", "$2a$10$/ztAYbnO7alJG0hNyNs19OZAgVA.5.1Ism4V2mDGN/DlskYRnHABO", function(err, res) {
   //  // res === true

   //  console.log("matched",res)
   // });
