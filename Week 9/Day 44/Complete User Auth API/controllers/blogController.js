const Blog = require("../models/Blog");

// Create Blog
const createBlog = async (req, res) => {

    try {

        const blog = await Blog.create({
            title: req.body.title,
            content: req.body.content,
            author: req.user.id
        });

        res.status(201).json({
            success: true,
            blog
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get All Blogs
const getBlogs = async (req, res) => {

    const blogs = await Blog.find().populate("author", "name email");

    res.json({
        success: true,
        blogs
    });

};

// Update Blog (Ownership Check)
const updateBlog = async (req, res) => {

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        return res.status(404).json({
            success: false,
            message: "Blog Not Found"
        });
    }

    if (blog.author.toString() !== req.user.id) {
        return res.status(403).json({
            success: false,
            message: "Forbidden"
        });
    }

    blog.title = req.body.title || blog.title;
    blog.content = req.body.content || blog.content;

    await blog.save();

    res.json({
        success: true,
        blog
    });

};

// Delete Blog (Ownership Check)
const deleteBlog = async (req, res) => {

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        return res.status(404).json({
            success: false,
            message: "Blog Not Found"
        });
    }

    if (blog.author.toString() !== req.user.id) {
        return res.status(403).json({
            success: false,
            message: "Forbidden"
        });
    }

    await blog.deleteOne();

    res.json({
        success: true,
        message: "Blog Deleted"
    });

};

module.exports = {
    createBlog,
    getBlogs,
    updateBlog,
    deleteBlog
};