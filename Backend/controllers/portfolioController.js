const Portfolio = require('../models/Portfolio');

exports.createPortfolio = async (req, res) => {
  try {
    const newPortfolio = new Portfolio({
      ...req.body,
      freelancer_id: req.user.id
    });
    const portfolio = await newPortfolio.save();
    res.status(201).json(portfolio);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ msg: 'Portfolio not found' });
    }
    res.json(portfolio);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

