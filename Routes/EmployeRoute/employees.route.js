const router = require("express").Router();

const {
  addEmployee,
  getEmployee,
  editEployee,
  deleteEmployeData,
} = require("../../Controllers/EmployeControllers/employeeControllers");
router.post("/", addEmployee);
router.get("/", getEmployee);
router.put("/:id", editEployee);
router.delete("/:id", deleteEmployeData);
module.exports = router;
