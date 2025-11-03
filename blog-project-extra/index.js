const express=require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const db = require('./configs/db');

const app=express();
const port=8001;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))
app.use(cookieParser());

app.use('/',require('./routes/index'))

app.listen(port, (err) => {
    if (!err) {
        db();
        console.log("✅ Server started...");
        console.log(`👉 http://localhost:${port}`);
    } else {
        console.error("❌ Server failed:", err.message);
    }
});
