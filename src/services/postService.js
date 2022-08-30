const { BlogPost, User, Category } = require('../database/models');

const getAllPosts = async () => {
    const result = await BlogPost.findAll({
        include: [{
            model: User,
            as: 'user',
            attributes: {
            exclude: ['password'],   
            },
        },
        {
            model: Category,
            as: 'categories',
            through: {
            attributes: [],
            },
        }],
    });
    return result;
};

module.exports = {
    getAllPosts,
};
