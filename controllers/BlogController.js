const Blog = require("../models/BlogModel.js")

const getBlogs = async (req, res) => {
	try {
		const blogs = await Blog.find()
		res.json(blogs)
	} catch (e) {
		res.json(500).json({ message: e.message })
	}
}

const getBlogsById = async (req, res) => {
	try {
		const blog = await Blog.findById(req.params.id)
		res.json(blog)
	} catch (e) {
		res.json(404).json({ message: e.message })
	}
}

const saveBlog = async (req, res) => {
	const blog = new Blog(req.body)
	try {
		const insertedblog = await blog.save()
		res.status(201).json(insertedblog)
	} catch (e) {
		res.json(400).json({ message: e.message })
	}
}

const updateBlog = async (req, res) => {
	try {
		const updateBlog = await Blog.updateOne(
			{ _id: req.params.id },
			req.body
		)
		res.status(200).json(updateBlog)
	} catch (e) {
		res.json(400).json({ message: e.message })
	}
}

const deleteBlog = async (req, res) => {
	try {
		const deleteBlog = await Blog.deleteOne({ _id: req.params.id })
		res.status(200).json(deleteBlog)
	} catch (e) {
		res.json(400).json({ message: e.message })
	}
}

module.exports = {
	getBlogs,
	getBlogsById,
	saveBlog,
	updateBlog,
	deleteBlog,
}
