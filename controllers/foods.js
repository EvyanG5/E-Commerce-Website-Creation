
const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', (req, res) => {
  res.render('foods/index.ejs');
});
router.get('/new', (req, res) => {
    res.render('new.ejs')
});
// localhost:3000/foods/new


module.exports = router;
