const express = require('express');
const todos = require('./todos');
const auth = require('./auth');

const router = express.Router();

router.use('/auth', auth);
router.use('/todos', todos);


module.exports = router;
