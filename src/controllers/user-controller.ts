class UserController {
  async registration(req: any, res: any, next: any) {
    try {
    } catch (e) {}
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
