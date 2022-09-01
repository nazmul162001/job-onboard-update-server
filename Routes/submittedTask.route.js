const router = require("express").Router();
const {
  submitTaskFromCandidate,
  getSubmittedTask,
  singleSubmission,
  singleSubmittedTask,
} = require("../Controllers/submittedTask.controller");

const VerifyToken = require("../VerifyToken/VerifyToken");
router.post("/submitCandidateTask", VerifyToken, submitTaskFromCandidate);
router.get("/submittedTask", VerifyToken, getSubmittedTask);
router.get(
  "/submittedTask/candidate/:applicantId",
  VerifyToken,
  singleSubmission
);
router.get("/submittedTask/:taskID", VerifyToken, singleSubmittedTask);
module.exports = router;
