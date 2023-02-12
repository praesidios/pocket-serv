import UserModel from '../models/user-model';
import bcrypt from 'bcrypt';
import uuid from 'uuid';
import mailService from './mail-service';
import UserDto from '../dtos/user-dto';
import tokenService from './token-service';
class UserService {
  async registration(email: any, password: any) {
    const candidate = await UserModel.findOne(email);

    if (candidate) {
      throw new Error(`Пользователь с почтовым адресом ${email} уже существует `);
    }

    const hashPassword = bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserModel.create({ email, password: hashPassword, activationLink });
    await mailService.sendActivationMail(email, activationLink);

    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

export default new UserService();
