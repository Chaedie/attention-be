const AuthDao = require("./auth.dao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authDao = new AuthDao();
class AuthService {
  async isExistUser(email) {
    const user = await authDao.findOneUser(email);

    return user.length > 0;
  }

  async postSignup(email, password) {
    if (await this.isExistUser(email)) {
      throw new Error("이미 존재하는 이메일입니다.");
    }

    const hash = await bcrypt.hash(password, 10);

    await authDao.createUser(email, hash);
    await authDao.createSession(email, sessionId);
  }

  async postSignin(email, password) {
    if (await !this.isExistUser(email)) {
      throw new Error("없는 이메일입니다.");
    }

    const hash = await bcrypt.hash(password, 10);
    const match = await bcrypt.compare(password, hash);

    if (!match) {
      throw new Error("이메일 패스워드 정보를 확인하세요");
    }

    const accessToken = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return accessToken;
  }
}

module.exports = AuthService;
