import User from '../models/userModel.js';

export const fetchAllUsers = async () => {
    return await User.find();
};

export const fetchUserById = async (id) => {
    return await User.findById(id);
};
