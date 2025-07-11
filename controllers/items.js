
const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', (req, res) => {
  res.render('/home.ejs');
});
router.get('/new', (req, res) => {
    res.render('new.ejs')
});
router.get('/items', (req, res) => {
  res.render('/item_database.ejs')
})

module.exports = router;
