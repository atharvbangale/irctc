const mongoose = require('mongoose');

const travelerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  }
});

const Traveler = mongoose.model('Traveler', travelerSchema);

module.exports = Traveler;
