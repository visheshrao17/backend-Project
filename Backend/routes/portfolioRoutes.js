const express = require('express');
const router = express.Router();
const { createPortfolio, getPortfolio } = require('../controllers/portfolioController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createPortfolio);
router.get('/:id', getPortfolio);

module.exports = router;
