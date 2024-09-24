const Post = require('../models/Post');

// Create a Post
exports.createPost = async (req, res) => {
    const { content } = req.body;
    try {
        const newPost = new Post({ content, user: req.user.userId });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Like a Post
exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        post.likes.push(req.user.userId);
        await post.save();
        res.status(200).json({ message: 'Post liked' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Comment on a Post
exports.commentPost = async (req, res) => {
    const { comment } = req.body;
    try {
        const post = await Post.findById(req.params.id);
        post.comments.push({ user: req.user.userId, comment });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a Post by ID
exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('user', 'username'); // Assuming you want to show the username of the user who created the post
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};