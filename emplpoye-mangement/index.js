
const express = require("express");
const app = express();
const port = 8081;
let employees = [];
let tasks = [];


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(employees);
  return res.render("index", {
    employees,
  });
});
app.get("/employee/delete/:id", (req, res) => {
  const { id } = req.params;
  employees = employees.filter((employee) => employee.id != id);
  return res.redirect("/");
});
app.get("/employee/edit/", (req, res) => {
  const { id } = req.query;
  let data = employees.find((employee) => employee.id == id);
  return res.render("edit", {
    data,
  });
});
app.post("/employee/edit/", (req, res) => {
  const { id } = req.query;

  employees = employees.map((employee) => {
    if (employee.id == id) {
      return {...employee,
        employee_name: req.body.employee_name,
        dep: req.body.dep,
        emp_salary: req.body.emp_salary,
      };
    }
    return employee;
  });

  return res.redirect("/");
});

app.post("/login", (req, res) => {
  const uniqueId = Date.now();
  let obj = {
    id: uniqueId,
    employee_id: uniqueId,
    employee_name: req.body.employee_name,
    dep: req.body.dep,
    emp_salary: req.body.emp_salary,
  };

  employees.push(obj);
  console.log("Data added:", obj);
  return res.redirect("/");
});

app.get("/employee/task", (req, res) => {
  const { id } = req.query;
  const employee = employees.find(emp => emp.id == id);
  const employeeTasks = tasks.filter(task => task.empId == id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.render("task", {
    employee,
    employeeTasks
  });
});
app.post("/employee/task", (req, res) => {
  const { empId, task_title } = req.body;
  tasks.push({
    id: Date.now(),
    empId,
    title: task_title
  });
  res.redirect(`/employee/task?id=${empId}`);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Server started.");
    console.log("http://localhost:" + port);
  }
});
