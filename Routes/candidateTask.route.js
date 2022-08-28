const router = require("express").Router();
const {
  submitTaskFromCandidate,
} = require("../Controllers/candidateTask.controller");
const VerifyToken = require("../VerifyToken/VerifyToken");
router.post("/submitCandidateTask", VerifyToken, submitTaskFromCandidate);
module.exports=router
