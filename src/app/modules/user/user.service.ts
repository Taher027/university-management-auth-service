import config from '../../../config/index';
import { Iuser } from './user.interface';
import { User } from './user.model';
import { generatedUserId } from './user.utils';

const createUser = async (user: Iuser): Promise<Iuser | null> => {
  const id = await generatedUserId();
  user.id = id;
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new Error('failed to create user');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
