
const express=require('express');
const db = require('./configs/database');
const app=express();
const port=8081;


app.listen(port,(err)=>{
    
    if(err){
    db();
        console.log(err.message);
    }
    else{
        
        console.log("server started");
        console.log("http://localhost:"+port);  
    }
})
