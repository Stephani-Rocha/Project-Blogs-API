const { User } = require('../database/models');

const login = async (email) => {
    const result = await User.findOne({ where: { email } });
    if (!result) return false;
    return result;
};

module.exports = {
    login,
};