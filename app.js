const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserRoute = require("./routes/UserRoutes.js")
const BlogRoute = require("./routes/BlogRoutes.js")

class App {
	constructor() {
		this.app = express()
		this.config()
		this.routes()
	}

	config() {
		this.app.use(express.json())
		this.app.use(cors())
		mongoose.connect(
			"mongodb+srv://auliarahmanz:gMH8pB8scsB6Bx5B@portoauliarz.1g5gt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		)
		let db = mongoose.connection
		db.on("error", console.error.bind(console, "connection error:"))
		db.once("open", () => console.log("connected to mongodb"))
	}

	routes() {
		this.app.use(UserRoute)
		this.app.use(BlogRoute)
	}
}

module.exports = new App().app
