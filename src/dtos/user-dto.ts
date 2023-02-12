export default class UserDto {
  email: any;
  id: any;
  isActive: any;

  constructor(model: any) {
    this.email = model.email;
    this.id = model.id;
    this.isActive = model.isActive;
  }
}
