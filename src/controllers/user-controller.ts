import userService from '../services/user-service';

class UserController {
  async registration(req: any, res: any, next: any) {
    try {
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async login(req: any, res: any, next: any) {
    try {
    } catch (e) {}
  }

  async logout(req: any, res: any, next: any) {
    try {
    } catch (e) {}
  }

  async activate(req: any, res: any, next: any) {
    try {
    } catch (e) {}
  }

  async refresh(req: any, res: any, next: any) {
    try {
    } catch (e) {}
  }

  async getUsers(req: any, res: any, next: any) {
    try {
      res.json(['123', '23232', 'some test']);
    } catch (e) {}
  }

  async default(req: any, res: any, next: any) {
    try {
      res.send('API home page');
    } catch (e) {}
  }
}

export default new UserController();
