const mongoose = require('./mongoForNews');
//create collection with schema

const New = new mongoose.Schema(
    {
     title: String,
     des: String,
     url: String,
     imageURL:String,
     publishedAt: Date
    }
);

module.exports = mongoose.model('New',New);