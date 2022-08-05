const router = require("express").Router();

const {
  addEmployee, getEmployee,
} = require("../../Controllers/EmployeControllers/employeeControllers");
router.post("/", addEmployee);
router.get("/", getEmployee);
module.exports = router;
