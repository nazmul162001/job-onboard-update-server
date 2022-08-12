const router = require("express").Router();

const {
  addEmployee,
  getEmployee,
  editEployee,
  deleteEmployeData,
  singleDetails,
} = require("../Controllers/employeeControllers");
router.post("/addEmployees", addEmployee);
router.get("/getEmployees", getEmployee);
router.get("/getEmployees/:detailsId", singleDetails);
router.put("/editEployee/:id", editEployee);
router.delete("/deleteEmployeDetails/:id", deleteEmployeData);
module.exports = router;
