const express = require('express');
const app = express();
const PORT = 8080;
let employees = []

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    console.log(employees);
    
    return res.render("index", {
        employees
    });
});
app.get("/employee/delete/:id", (req, res) => {
const {id}=req.params;
  employees = employees.filter((employee) => employee.id != id);
  return res.redirect("/");
});

app.post("/login", (req, res) => {
  let obj = {
    id: Date.now(), // unique ID used for deletion/edit
    Employee_id: Date.now(), // show this in the table too
    Employee_name: req.body.Employee_name,
    Department: req.body.Department,
    Salary: req.body.Salary,
  };
  employees.push(obj);
  return res.redirect("/");
});


app.listen(PORT, (err) => {
    if (err) {
        console.log(err);

    }
    else {
        console.log("Server started..");
        console.log("http://localhost:" + PORT);
    }
})