const mongoose = require("mongoose")

const User = mongoose.Schema({
	nama: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	komentar: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
})

module.exports = mongoose.model("Users", User)
