const { Category } = require('../database/models');

const createCategory = async ({ name }) => {
const result = await Category.create({ name });
return result;
};

module.exports = {
    createCategory,
};