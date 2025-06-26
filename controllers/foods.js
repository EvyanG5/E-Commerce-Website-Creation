
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
router.post('/users/:userId/foods', (req, res) => {
    const loggedinUser = req.session.user
    console.log({loggedinUser, body: req.body})
    res.send('')
   });

module.exports = router;
