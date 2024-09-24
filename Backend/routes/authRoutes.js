const express = require('express');
const { signupUser, loginUser, googleLogin } = require('../controllers/authController');
const router = express.Router();

// POST /auth/signup - Sign up a new user
router.post('/signup', signupUser);

// POST /auth/login - Log in and receive a JWT
router.post('/login', loginUser);

// POST /auth/google-login - Google login
// router.post('/google-login', googleLogin);

module.exports = router;
