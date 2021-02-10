const jwt = require('jsonwebtoken');
const config = require('config');

/**
 * @param {*} user - The user object.
 * @param {*} res - Response object.
 * @desc Signs a JWT and send a response to the client.
 */
function signTokenAndRespond(user, res) {
  const token = jwt.sign({ id: user.id }, config.get('secretKey'));
  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      topics: user.topics,
      currentDate: new Date(Date.now()).toISOString(),
    },
  });
}

module.exports = {
  signTokenAndRespond,
};
