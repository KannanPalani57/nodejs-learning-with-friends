const express = require('express')

const app = express()

const db = require("./config/db")
const employeeRoutes = require("./routes/employeeRoutes")

app.use(express.json())

const PORT = 8000 || process.env.PORT

app.get("/", (req, res) => {
	res.send('Hello Node app')
})




app.use("/api/employee", employeeRoutes)






app.listen(PORT, () => {
	console.log("Server is running on PORT", PORT)
})


