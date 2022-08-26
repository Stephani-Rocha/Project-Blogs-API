const userService = require('../services/userService');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const result = await userService.createUser({ displayName, email, password, image });

    console.log(result);

    if (!result) {
        return res.status(409).json({ message: 'User already registered' });
    }

    return res.status(201).json({ token: result });
};

module.exports = {
    createUser,
};