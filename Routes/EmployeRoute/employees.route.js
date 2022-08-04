const router = require("express").Router();

const {
  addEmployee,
} = require("../../Controllers/EmployeControllers/employeeControllers");
router.post("/addEmploye", addEmployee);
module.exports = router;
