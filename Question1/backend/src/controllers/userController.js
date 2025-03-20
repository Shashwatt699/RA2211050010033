import { ToppUsers } from '../models/userModel.js';

export const ToppUsers = async (req, res) => {
  try {
    const topUsers = await getTopUsers();
    res.json(topUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};