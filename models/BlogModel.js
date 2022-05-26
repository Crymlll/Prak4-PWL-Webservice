const mongoose = require("mongoose")

const Blog = mongoose.Schema({
	judul: {
		type: String,
		required: true,
	},
	isi: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
})

module.exports = mongoose.model("Blogs", Blog)
