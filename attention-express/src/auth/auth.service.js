const AuthDao = require("./auth.dao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authDao = new AuthDao();
class AuthService {
  async isExistUser(email) {
    const user = await authDao.findOneUser(email);

    return !!user;
  }

  async postSignup(email, password) {
    if (await this.isExistUser(email)) {
      throw new Error("이미 존재하는 이메일입니다.");
    }

    const hash = await bcrypt.hash(password, 10);

    await authDao.createUser(email, hash);
  }
}

module.exports = AuthService;
