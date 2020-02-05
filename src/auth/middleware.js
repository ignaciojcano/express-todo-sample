const unless = require('express-unless');
const passport = require('./');

module.exports = function () {
  const jwt = passport.authenticate('jwt', { session: false });

  jwt.unless = unless;

  return jwt;
};
