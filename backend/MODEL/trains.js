const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  trainName: { type: String, required: true ,default:"" },
  trainNo: { type: Number, required: true ,default:"" },
  source: { type: String, required: true ,defaulr:""},
  destination: { type: String, required: true ,default:""},
  departureTime: { type: Date, required: true ,default:""},
  arrivalTime: { type: Date, required: true ,default:""},
  duration: { type: Number, required: true ,default:0},
  fare: {
    acSleeper: { type: Number, required: true, default: 0 },
    firstClass: { type: Number, required: true, default: 0 },
    secondClass: { type: Number, required: true, default: 0 },
    thirdClass: { type: Number, required: true, default: 0 }
  },
  totalSeats: { type: Number, required: true, default: 0 }
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
