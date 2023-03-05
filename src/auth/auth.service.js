const AuthDao = require("./auth.dao");

const authDao = new AuthDao();
class AuthService {
  async postSignup(email, password) {
    const user = await authDao.findOneUser(email);
    if (user.length > 0) {
      throw new Error("이미 존재하는 이메일입니다.");
    }

    await authDao.createUser(email, password);
    return;
  }
}

module.exports = AuthService;
