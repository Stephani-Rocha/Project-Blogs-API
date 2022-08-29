const categoriesServices = require('../services/categoriesServices');

const createCategory = async (req, res) => {
    const { name } = req.body;

    const result = await categoriesServices.createCategory({ name });
    return res.status(201).json(result);
};

module.exports = {
    createCategory,
};