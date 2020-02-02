const config = require('config');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt');
const { compareSync } = require('bcrypt');
const { findByEmail, findById } = require('../services/auth');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordFiled: 'password',
}, async (email, password, next) => {
  try {
    const user = await findByEmail(email);
    if (compareSync(password, user.password)) {
      return next(null, user);
    }
    return next(new Error('Email or Password is wrong'));
  } catch (e) {
    return next(e);
  }
}));

passport.use(new JWTStrategy({
  secretOrKey: config.get('server.secret'),
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}, async (token, next) => {
  try {
    const user = await findById(token.user_id);
    return next(null, user);
  } catch (e) {
    return next(e);
  }
}));

module.exports = passport;
