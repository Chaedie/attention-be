const AuthDao = require("./auth.dao");

const authDao = new AuthDao();
class AuthService {
  async isExistUser(email) {
    const user = await authDao.findOneUser(email);

    return user.length > 0;
  }

  async postSignup(email, password) {
    if (this.isExistUser(email)) {
      throw new Error("이미 존재하는 이메일입니다.");
    }

    await authDao.createUser(email, password);
    return;
  }

  async postSignin(email, password) {
    if (!this.isExistUser(email)) {
      throw new Error("없는 이메일입니다.");
    }

    const user = await authDao.signinUser(email, password);
    if (user.length === 0) {
      throw new Error("유저 정보가 일치하지 않습니다.");
    }

    return;
  }
}

module.exports = AuthService;
