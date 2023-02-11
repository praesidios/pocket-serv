import UserModel from '../models/user-model';
import bcrypt from 'bcrypt';
import uuid from 'uuid';

class UserService {
  async registration(email: any, password: any) {
    const candidate = await UserModel.findOne(email);

    if (candidate) {
      throw new Error(`Пользователь с почтовым адресом ${email} уже существует `);
    }

    const hashPassword = bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserModel.create({ email, password: hashPassword, activationLink });
  }
}

export default new UserService();
