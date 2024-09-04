const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  img: {
    type: String,
    default:"",
  },
  heading: {
    type: String,
    default:"",
  },
  content: {
    type: String,
    default:""
  }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
