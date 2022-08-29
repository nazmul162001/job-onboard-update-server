const router = require("express").Router();
const {
  submitTaskFromCandidate,
  getSubmittedTask
} = require("../Controllers/submittedTask.controller");


const VerifyToken = require("../VerifyToken/VerifyToken");
router.post("/submitCandidateTask", VerifyToken, submitTaskFromCandidate);
router.get('/submittedTask' , getSubmittedTask)
module.exports=router
