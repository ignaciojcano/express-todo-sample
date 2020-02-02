const express = require('express');
const router = require('./routes');
const passport = require('./auth');
const jwt = require('./auth/middleware');

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(jwt().unless({
    path: /\/auth.*$/
}));
app.use(router);

module.exports = app;
