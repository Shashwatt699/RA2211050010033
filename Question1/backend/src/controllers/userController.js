import { getTopUsers } from '../models/userModel.js';

export const getTopUsers = async (req, res) => {
  try {
    const topUsers = await getTopUsers();
    res.json(topUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};