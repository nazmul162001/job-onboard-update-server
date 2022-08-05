/* Init Server  */
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();

//Routes
const loginRouter = require("./Routes/login.route.js");
const usersRouter = require("./Routes/users.route.js");
const jobsRouter = require("./Routes/jobs.route");
const applicantsRouter = require("./Routes/applicants.route");
// Employe route
const addEmployeeRouter = require("./Routes/EmployeRoute/employees.route");
const getEmployeeRouter = require("./Routes/EmployeRoute/employees.route");
const editEmployeRouter = require("./Routes/EmployeRoute/employees.route");
const deleteEmployeRouter = require("./Routes/EmployeRoute/employees.route");
/* Set Middle wares  */
app.use(cors());
app.use(express.json());

/* Use Routes  */
app.use("/login", loginRouter);
app.use("/users", usersRouter);
app.use("/jobs", jobsRouter);
app.use("/applicants", applicantsRouter);
// employe route
app.use("/addEmployees", addEmployeeRouter);
app.use("/getEmployees", getEmployeeRouter);
app.use("/editEployee", editEmployeRouter);
app.use("/deleteEmployeDetails", deleteEmployeRouter);

/* testing api  */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Views/index.html"));
});

/* not found routes */
app.use((req, res, next) => {
  res.status(404).send({ success: false, message: "Not Found Route" });
});

/* Server Error Routes */
app.use((err, req, res, next) => {
  res
    .status(500)
    .send({ success: false, message: "Something Broke of your API" });
});

module.exports = app;
