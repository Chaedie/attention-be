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
  }

  async postSignin(email, password) {
    if (await !this.isExistUser(email)) {
      throw new Error("없는 이메일입니다.");
    }

    const user = (await authDao.findOneUser(email))[0];
    const hash = user.password;
    const match = await bcrypt.compare(password, hash);

    if (!match) {
      throw new Error("이메일 패스워드 정보를 확인하세요");
    }

    const accessToken = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return { accessToken, user_id: user.id };
  }
}

module.exports = AuthService;
