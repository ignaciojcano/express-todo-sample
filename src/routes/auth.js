const express = require('express');
const config = require('config');
const jwt = require('jsonwebtoken');
const passport = require('../auth');
const { register } = require('../services/auth');

const router = express.Router();

router.post('/login', (req, res, next) => {
  passport.authenticate('local', async (err, user) => {
    try {
      if (err || !user) {
        const error = new Error('An Error occured');
        return next(error);
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        const token = jwt.sign({ user_id: user.id }, config.get('server.secret'));
        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.post('/register', async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    await register(name, email, password);
    res.send('created', 201);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
