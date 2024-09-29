// const User = require('../models/User');
// const { hashPassword, comparePassword } = require('../utils/passwordUtils');
// const { generateToken } = require('../utils/jwtUtils');

// exports.register = async (req, res) => {
//   try {
//     const { username, email, password, user_type } = req.body;
//     let user = await User.findOne({ email });
//     console.log(user);
//     if (user) {
//       return res.status(400).json({ msg: 'User already exists' });
//     }
//     const hashedPassword = await hashPassword(password);
//     user = new User({
//       username,
//       email,
//       password: hashedPassword,
//       user_type
//     });
//     await user.save();
//     const token = generateToken(user.id);
//     res.status(201).json({ token });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// };

// exports.login = async (req, res) => {
//   console.log(req);
//   try {
//     const { email, password } = req.body;
//     let user = await User.findOne({ email });
//     console.log("user", user);
//     if (!user) {
//       return res.status(400).json({ msg: 'Invalid Credentials' });
//     }
//     const isMatch = await comparePassword(password, user.password);
//     console.logI("isMatch", isMatch)
//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid Credentials' });
//     }
//     const token = generateToken(user.id);
//     res.json({ token });
//   } catch (err) {
//     console.error("err.message", err.message) ;
//     res.status(500).send('Server error');
//   }
// };


const User = require('../models/User');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');
const { generateToken } = require('../utils/jwtUtils');

exports.register = async (req, res) => {
  try {
    const { username, email, password, user_type } = req.body;
    let user = await User.findOne({ email });
    
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    const hashedPassword = await hashPassword(password);
    
    user = new User({
      username,
      email,
      password: hashedPassword,
      user_type
    });
    
    await user.save();

    const token = generateToken(user.id);

    console.log('User created successfully:', user);
    
    res.status(201).json({ token });
    
  } catch (err) {
    console.error('Error during registration:', err.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;


    let user = await User.findOne({ email });


    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await comparePassword(password, user.password);



    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const token = generateToken(user.id);

    // console.log('Login successful, token generated:', token);

    res.json({ token });
    
  } catch (err) {
    console.error('Error during login:', err.message);
    res.status(500).send('Server error');
  }
};
