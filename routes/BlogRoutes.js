const express = require("express")
const {
	deleteBlog,
	getBlogs,
	getBlogsById,
	saveBlog,
	updateBlog,
} = require("../controllers/BlogController.js")

const router = express.Router()

router.get("/blog", getBlogs)
router.get("/blog/:id", getBlogsById)
router.post("/blog", saveBlog)
router.patch("/blog/:id", updateBlog)
router.delete("/blog/:id", deleteBlog)

module.exports = router
