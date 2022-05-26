const User = require("../models/UserModel.js")

const getUsers = async (req, res) => {
	try {
		const users = await User.find()
		res.status(200).json(users)
	} catch (e) {
		res.json(500).json({ message: e.message })
	}
}

const getUsersById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		res.status(200).json(user)
	} catch (e) {
		res.json(404).json({ message: e.message })
	}
}

const saveUser = async (req, res) => {
	const user = new User(req.body)
	try {
		const inserteduser = await user.save()
		res.status(201).json(inserteduser)
	} catch (e) {
		res.json(400).json({ message: e.message })
	}
}

const updateUser = async (req, res) => {
	try {
		const updateUser = await User.updateOne(
			{ _id: req.params.id },
			req.body
		)
		res.status(200).json(updateUser)
	} catch (e) {
		res.json(400).json({ message: e.message })
	}
}

const deleteUser = async (req, res) => {
	try {
		const deleteUser = await User.deleteOne({ _id: req.params.id })
		res.status(200).json(deleteUser)
	} catch (e) {
		res.json(400).json({ message: e.message })
	}
}

module.exports = {
	getUsers,
	getUsersById,
	saveUser,
	updateUser,
	deleteUser,
}
