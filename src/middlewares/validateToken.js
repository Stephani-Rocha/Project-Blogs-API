const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const validateToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        jwt.verify(token, JWT_SECRET);
    next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

const decodeToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    const user = await User.findOne({ where: { email: decoded.email } });

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = {
    validateToken,
    decodeToken,
};