const router = require("express").Router();
const {
  giveCandidateTask,
  getHrTask,
  allreadyGiven,
  singleTask,
} = require("../Controllers/candidateTask.controller");
const VerifyToken = require("../VerifyToken/VerifyToken");
router.post("/candidateTask", VerifyToken, giveCandidateTask);
router.get("/singleTask/:taskId", VerifyToken, singleTask);
router.get("/AllredyGiven", VerifyToken, allreadyGiven);
router.get("/getHrTask", VerifyToken, getHrTask);
module.exports = router;
