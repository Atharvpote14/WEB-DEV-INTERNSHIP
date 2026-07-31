const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    createBlog,
    getBlogs,
    updateBlog,
    deleteBlog
} = require("../controllers/blogController");

router.post("/", authMiddleware, createBlog);

router.get("/", getBlogs);

router.put("/:id", authMiddleware, updateBlog);

router.delete("/:id", authMiddleware, deleteBlog);

module.exports = router;