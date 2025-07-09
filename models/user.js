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

});


const itemSchema = new mongoose.Schema({
  itemType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sellerAgreement: {
    type: Boolean,
    required: true,
},
  description: {
  type: String,
  required: true,
  },

  sold: {
    type: Boolean,
    required: true,
  },
  buy: {
    type: Number,
    required: true
  }

});

const User = mongoose.model('User', userSchema);

module.exports = User;
