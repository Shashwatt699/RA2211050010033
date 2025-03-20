import { getLatestPosts, getPopularPosts } from '../models/postModel.js';

export const getPosts = async (req, res) => {
  const { type } = req.query;

  try {
    if (type === 'latest') {
      const latestPosts = await getLatestPosts();
      res.json(latestPosts);
    } else if (type === 'popular') {
      const popularPosts = await getPopularPosts();
      res.json(popularPosts);
    } else {
      res.status(400).json({ error: 'Invalid type parameter' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};