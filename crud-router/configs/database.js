const { default: mongoose } = require("mongoose");

const db= mongoose.connection;
mongoose.connect('mongodb+srv://patelkomal2332:12345@cluster0.wg4ajfg.mongodb.net/')
db.on('connected',(err)=>{
    if(!err){
        console.log('connected db successfully');
    }
})
module.exports=db;