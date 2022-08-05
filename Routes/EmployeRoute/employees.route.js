const router = require("express").Router();

const {
  addEmployee,
  getEmployee,
  editEployee,
} = require("../../Controllers/EmployeControllers/employeeControllers");
router.post("/", addEmployee);
router.get("/", getEmployee);
router.put("/:id", editEployee);
module.exports = router;
