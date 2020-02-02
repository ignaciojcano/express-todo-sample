const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'implement me!'});
});

router.post('/', (req, res) => {
    res.json({message: 'implement me!'});
});

router.get('/:id', (req, res) => {
    res.json({message: 'implement me!'});
});

router.put('/:id', (req, res) => {
    res.json({message: 'implement me!'});
});

module.exports = router;
