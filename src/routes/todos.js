const express = require('express');
const { getTodos } = require('../services/todos');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.json(await getTodos(req.user));
  } catch (e) {
    next(e);
  }
});

router.post('/', (req, res) => {
  res.json({ message: 'implement me!' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'implement me!' });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'implement me!' });
});

module.exports = router;
