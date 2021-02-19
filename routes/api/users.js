const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');
const { signTokenAndRespond } = require('../../utils/serverUtils');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

/**
 * @route [POST] api/users
 * @description Registers a new user
 * @access Public
 */
route.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ msg: 'Please ensure all fields are valid' });

  //Checks for existing user
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: 'User already exists.' });
  });

  const newUser = new User({
    username,
    email,
    password,
    topics: [],
  });

  try {
    newUser.password = await bcrypt.hash(password, 10);
    const user = await newUser.save();
    signTokenAndRespond(user, res);
  } catch (error) {
    res.status(400).json({ msg: 'Registration failed.' });
  }
});

/**
 * @route [PUT] api/users/:id
 * @description Update user data
 * @access Private
 */
route.put('/:id', auth, (req, res) => {
  const id = req.params.id;
  User.findById(id, async (err, user) => {
    if (err) return res.status(400).json({ msg: 'Update failed' });

    const newTopic = req.body.topic;
    user.topics = [...user.topics, newTopic];
    await user.save();
    res.json({ msg: 'Update successful' });
  });
});

module.exports = route;
