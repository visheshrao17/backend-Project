const Like = require('../models/Like');

exports.likePost = async (req, res) => {
  try {
    const newLike = new Like({
      post_id: req.params.id,
      user_id: req.user.id
    });
    const like = await newLike.save();
    res.status(201).json(like);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

