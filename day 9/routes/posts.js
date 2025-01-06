
const path = require('path')
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../views/posts.html'));
});

router.get('/:id', (req,res) => {
    res.sendFile(`<h1>Post ID: ${req.params.id}</h1>`);
});

module.exports = router;