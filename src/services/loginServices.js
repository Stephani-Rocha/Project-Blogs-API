const { User } = require('../database/models');

const login = async (email) => {
    console.log(email);
    const result = await User.findOne({ where: { email } });
    console.log(result);
    if (!result) return false;
    return result;
};

module.exports = {
    login,
};