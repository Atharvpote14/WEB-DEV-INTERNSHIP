const Post = require('../models/post');

async function createPost(req, res) {
    try {
        const post = await Post.create({
            title: req.body.title,
            content: req.body.content,
            author: req.user._id
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

async function updatePost(req, res) {
}
const post = await Post.findById(req.params.id);
if (!post) return res.status(404).json({ error: 'Post not found' });
if (post.author.toString() !== req.user._id.toString()) {
    return res.status(403).json({ error: 'Not your post' });
}
const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
res.json(updated);
async function deletePost(req, res) {
const post = await Post.findById(req.params.id);
if (!post) return res.status(404).json({ error: 'Post not found' });
if (post.author.toString() !== req.user._id.toString()) {
    return res.status(403).json({ error: 'Not your post' });
}
const deleted = await Post.findByIdAndDelete(req.params.id);
res.json(deleted);
}

module.exports = {
    createPost,
    updatePost,
    deletePost
};