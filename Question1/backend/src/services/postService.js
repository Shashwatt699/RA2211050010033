import Post from '../models/postModel.js';

export const fetchAllPosts = async () => {
    return await Post.find();
};

export const fetchPostById = async (id) => {
    return await Post.findById(id);
};
