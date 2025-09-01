const express = require('express')
const app =express()
const port =8081

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get('/',(res,req)=>{
    return req.render('index')
})

app.get('/',(res,req)=>{
    return req.render('index')
})
app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Server started.");
    console.log("http://localhost:" + port);
  }
});