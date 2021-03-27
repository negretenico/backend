const mongoose = require('./mongoForAdmin');
//create collection with schema

const Admin = new mongoose.Schema(
    {
     name: String,
     password: String,
     email: String,
    }
);

module.exports = mongoose.model('Admin',Admin);