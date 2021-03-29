const mongoose = require('./mongoForAdmin');
//create collection with schema
const Schema = mongoose.Schema

const adminModel = new Schema({
    title: {type:String},
    description: {type:String},
    url: {type:String},
    urlToImage: {type:String},
    publishedAt: {type:String},
    insertTime: {type:Number}
})


module.exports = mongoose.model('adminModel', adminModel)