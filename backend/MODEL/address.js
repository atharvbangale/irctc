const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  city: {
    type: String,
    default: 'Unknown'
  },
  pincode: {
    type: Number,
    default: 0
  },
  email: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  }
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
