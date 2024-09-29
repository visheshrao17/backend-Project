const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  try {
    const newComment = new Comment({
      post_id: req.params.id,
      user_id: req.user.id,
      content: req.body.content
    });
    const comment = await newComment.save();
    res.status(201).json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

