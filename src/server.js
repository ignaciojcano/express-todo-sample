const express = require('express');
const router = require('./routes');
const passport = require('./auth');

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(router);

module.exports = app;
