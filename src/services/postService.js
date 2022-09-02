const { BlogPost, User, Category, PostCategory, sequelize } = require('../database/models');

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

const getPostId = async (id) => {
    const result = await BlogPost.findByPk(id, {
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

    if (!result) return false;
    
    return result;
};

const createPost = async ({ title, content, categoryIds, id }) => {
    const transactionResult = await sequelize.transaction(async (transaction) => {    
    const post = await BlogPost.create({ title, content, userId: id });
    
        const xablau = categoryIds.map((number) => ({ postId: post.id, categoryId: number }));
    
        await PostCategory.bulkCreate(
          xablau,
          { transaction },
        );
        return post;
      }); 
      return transactionResult;
    };

module.exports = {
    getAllPosts,
    getPostId,
    createPost,
};
