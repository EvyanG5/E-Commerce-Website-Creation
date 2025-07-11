
const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', (req, res) => {
  res.render('/index.ejs');
});
router.get('/new', (req, res) => {
    res.render('new.ejs')
});

router.post('/users/:userId/items', (req, res) => {
    const loggedinUser = req.session.user
    console.log({loggedinUser, body: req.body})
    res.send('')
   });

module.exports = router;
