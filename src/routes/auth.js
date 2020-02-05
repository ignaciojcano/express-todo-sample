const express = require('express');
const config = require('config');
const jwt = require('jsonwebtoken');
const passport = require('../auth');
const { register } = require('../services/auth');
const { getAuthURI, getToken } = require('../auth/intuit');

const router = express.Router();

router.post('/login', (req, res, next) => {
  // eslint-disable-next-line
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

router.get('/intuit', async (req, res, next) => {
  try {
    res.redirect(getAuthURI());
  } catch (e) {
    next(e);
  }
});

router.get('/intuit/callback', async (req, res, next) => {
  try {
    const token = await getToken(req.url);
    console.log(token);
    /**
     * This is the token to access intuit, you can
     * now use it to make actual requests to quickbooks api :D
     * OAuth tokens tend to have an expiration time,
     * so you have to refresh them every now and then
     */

    /**
     * Let's make an API call now, you would usually redirect
     * your now logged in user here...
     * Send him back to a client or something with a generated JWT token
     */

    res.send('');
  } catch (e) {
    next(e);
  }
});

module.exports = router;
