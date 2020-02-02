const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('implement me!');
});

router.post('/', (req, res) => {
  res.send('implement me!');
});

router.get('/:id', (req, res) => {
  res.send('implement me!');
});

router.put('/:id', (req, res) => {
  res.send('implement me!');
});

module.exports = router;
