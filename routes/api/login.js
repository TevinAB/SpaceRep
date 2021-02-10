const express = require('express');
const route = express.Router();
const { signTokenAndRespond } = require('../../utils/serverUtils');
const bcrypt = require('bcrypt');

const User = require('../../models/User');

/**
 * @route [POST] api/login
 * @description User login endpoint
 * @access Public
 */
route.post('/', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ msg: 'Please ensure all fields are valid' });

  //Check if user exists
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: 'User not found' });

  try {
    //Check passwords
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      signTokenAndRespond(user, res);
    } else {
      res.status(401).json({ msg: 'Incorrect credentials.' });
    }
  } catch (error) {
    res.status(400).json({ msg: 'Login failed', error });
  }
});

module.exports = route;
