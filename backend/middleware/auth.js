const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Split and get the token part

  if (!token) {
    return res.status(401).json({
      message: 'Access Denied'
    });
  };

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({
        message: 'Invalid Token'
      });
    }
    req.user = user;
    next();
  })
};

module.exports = authenticateToken;
