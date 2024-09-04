const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    default:"",
  },
  password: {
    type: String,
    default:"",
    
  },
  securityQuestion: {
    type: String,
    default:"",

  },
  securityAnswer: {
    type: String,
    default:"",
  
  },
  email: {
    type: String,
    default:"",
  
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
