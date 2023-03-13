const passport = require("passport");
const LocalStrategy = require("passport-local");
const AuthDao = require("../src/auth/auth.dao");
const authDao = new AuthDao();
const bcrypt = require("bcrypt");

module.exports = () => {
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await authDao.findOneById({ userId: id });
      if (!user) return done(null, false);

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      (email, password, done) => {
        authDao
          .findOneUser(email)
          .then(async user => {
            if (!user) return done(null, false);
            const match = await bcrypt.compare(password, user.password);
            if (!match) return done(null, false);

            return done(null, user);
          })
          .catch(err => {
            done(err);
          });
      },
    ),
  );
};
