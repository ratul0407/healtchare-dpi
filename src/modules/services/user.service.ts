import { User } from "../models/user.model";

const registerUser = async (user: Partial<IUser>) => {
  return await User.create(user);
};

const getUser = async (id: string) => {
  return await User.findOne({ _id: id });
};
export const userService = {
  registerUser,
  getUser,
};
