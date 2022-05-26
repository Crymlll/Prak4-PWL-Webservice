const express = require("express")
const {
	deleteUser,
	getUsers,
	getUsersById,
	saveUser,
	updateUser,
} = require("../controllers/UserController.js")

const router = express.Router()

router.get("/users", getUsers)
router.get("/users/:id", getUsersById)
router.post("/users", saveUser)
router.patch("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)

module.exports = router
