const mongoose = require('mongoose');
const mongoConfig = require('../config/mongoConfig.json');
mongoose.connect(mongoConfig.urlForNew,{useNewUrlParser:true,useUnifiedTopology: true});

mongoose.connection.on('connected',()=>
{
    console.log('Mongoose connection open to:'+mongoConfig.urlForNew);
});

mongoose.connection.on('error',(err)=>{
    console.log('Mongoose deafult connection error'+err);
}
    
    );

module.exports = mongoose;