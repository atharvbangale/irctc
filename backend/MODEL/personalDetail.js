const mongoose = require('mongoose');

const personalDetailSchema = new mongoose.Schema({
    firstName: { type: String, default: '' },
    middleName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    occupation: { type: String, default: '' },
    dateOfBirth: { type: String, default: '' },
    email: { type: String, default: '' },
    gender: { type: String, default: '' },
    imageLink: { type: String, default: '' },
    mobileNumber: { type: String, default: '' },
    password: {
        type: String,
        default: "",

    },
});

module.exports = mongoose.model('PersonalDetail', personalDetailSchema);
