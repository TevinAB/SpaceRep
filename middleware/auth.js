const jwt = require('jsonwebtoken');
const config = require('config');

/**
 * Middleware to secure endpoints.
 * @param {*} req - Request object.
 * @param {*} res - Response object.
 * @param {*} next - Next function to call.
 */
function auth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token)
    return res.status(401).json({ msg: 'No token found. User unauthorized.' });

  //Verify token
  try {
    const decoded = jwt.decode(token, config.get('secretKey'));
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Invalid token.' });
  }
}

module.exports = auth;
