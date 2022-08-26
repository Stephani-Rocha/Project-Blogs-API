const jwt = require('jsonwebtoken');
const loginService = require('../services/loginServices');

const { JWT_SECRET } = process.env;

const login = async (req, res) => {
    const { email } = req.body;

    const payload = {
        email,
    };

    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '1d',    
    });

    const result = await loginService.login(email);
    if (!result) return res.status(400).json({ message: 'Invalid fields' });

    return res.status(200).json({ token });
};

module.exports = {
    login,
};
