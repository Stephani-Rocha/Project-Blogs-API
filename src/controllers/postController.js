const postService = require('../services/postService');

const getAllPosts = async (req, res) => {
    const result = await postService.getAllPosts();
    console.log(result);
    return res.status(200).json(result);
};

const getPostId = async (req, res) => {
    const { id } = req.params;
    const result = await postService.getPostId(id);
    if (!result) {
        return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(result);
};

module.exports = {
    getAllPosts,
    getPostId,
};