const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth');
const { createPost, getAllPosts, updatePost, deletePost } = require('../controllers/postController');
router.get('/', getAllPosts);
// PUBLIC anyone can read posts
router.post('/', requireAuth, createPost);
// must be logged in to write // PROTECTED
router.put('/:id', requireAuth, updatePost);
router.delete('/:id', requireAuth, deletePost);
module.exports = router;