const mongoose = require("mongoose")


const Employee = mongoose.model("Employee", {
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String, 
		required: true
	},
	address: {
		type: String, 
	},
	dateOfBirth: {
		type: String, 
	},
	city: {
		type: String, 
		default: ""
	},
	state: {
		type: String, 
				default: ""
	},
	pinCode: {
		type: String, 
		default: ""
	},
	mobile: {
		type: String, 
		default: ""
	}
})

module.exports = Employee