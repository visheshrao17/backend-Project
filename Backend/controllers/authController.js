const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const { OAuth2Client } = require('google-auth-library');
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Sign up a new user
exports.signupUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({
            message: 'User signed up successfully',
            user: { id: newUser._id, username, email }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error during signup', error });
    }
};

// Log in and receive a JWT
exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

// Google login
// exports.googleLogin = async (req, res) => {
//     const { tokenId } = req.body;
//     try {
//         const ticket = await client.verifyIdToken({
//             idToken: tokenId,
//             audience: process.env.GOOGLE_CLIENT_ID,
//         });
//         const { email, name, sub: googleId } = ticket.getPayload();

//         let user = await User.findOne({ email });
//         if (!user) {
//             user = new User({
//                 username: name,
//                 email,
//                 googleId,
//                 password: googleId,  // Or leave empty if not required
//             });
//             await user.save();
//         }

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//         res.status(200).json({
//             message: 'Google login successful',
//             token,
//             user: { id: user._id, username: user.username, email: user.email }
//         });
//     } catch (error) {
//         res.status(500).json({ message: 'Error during Google login', error });
//     }
// };
