const { name } = require('ejs');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry:  {
    property: name,
    type: String,
  }
});


const foodSchema = new mongoose.Schema({
  Food: {
    property: name,
    type: String,
    required: true,
  }
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
