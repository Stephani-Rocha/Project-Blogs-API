const postService = require('../services/postService');

const getAllPosts = async (req, res) => {
    const result = await postService.getAllPosts();
    console.log(result);
    return res.status(200).json(result);
};

module.exports = {
    getAllPosts,
};