import config from '../../../config/index'
import { Iuser } from './users.interface'
import { User } from './users.model'
import { generatedUserId } from './users.utils'

const createdUser = async (user: Iuser): Promise<Iuser | null> => {
  const id = await generatedUserId()
  user.id = id
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('failed to create user')
  }
  return createdUser
}

export default {
  createdUser,
}
