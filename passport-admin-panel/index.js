const express = require ('express')
const { db } = require('moongose/models/user_model')
const port =8081
const app = express()

app.listen(port,(err)=>{
    if(!err){
        
        console.log("server Start");
        console.log("http://localhost:" + port);
    }
})