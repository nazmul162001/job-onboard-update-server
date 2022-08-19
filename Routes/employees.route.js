const router = require("express").Router();

const {
  addEmployee,
  getEmployee,
  editEployee,
  deleteEmployeData,
  singleDetails,
  userEmployees,
} = require("../Controllers/employeeControllers");
const VerifyToken = require("../VerifyToken/VerifyToken");
router.post("/addEmployees", addEmployee);
router.get("/getEmployees", VerifyToken, getEmployee);
router.get("/userEmployees", VerifyToken, userEmployees);
router.get("/getEmployees/:detailsId", singleDetails);
router.put("/editEployee/:id", editEployee);
router.delete("/deleteEmployeDetails/:id", deleteEmployeData);
module.exports = router;
