/* eslint-disable no-unused-vars */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },

  contactAs: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  services: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  slot: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ContactDetails', schema);
