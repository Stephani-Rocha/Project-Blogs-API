const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const createUser = async ({ displayName, email, password, image }) => {
    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
        return false;
    }

    await User.create({ displayName, email, password, image });

    const payload = {
        displayName, email, password, image,
    };
    
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '1d',    
    });

    return token;
};

module.exports = {
    createUser,
};