const categoriesServices = require('../services/categoriesServices');

const createCategory = async (req, res) => {
    const { name } = req.body;

    const result = await categoriesServices.createCategory({ name });
    return res.status(201).json(result);
};

const getAllCategories = async (req, res) => {
    const result = await categoriesServices.getAllCategories();
    return res.status(200).json(result);
};

module.exports = {
    createCategory,
    getAllCategories,
};