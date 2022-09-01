const router = require("express").Router();
const {
  giveCandidateTask,
  getJobTask,
  allreadyGiven,
  singleTask,
} = require("../Controllers/hrTask.controller");
const VerifyToken = require("../VerifyToken/VerifyToken");
router.post("/candidateTask", VerifyToken, giveCandidateTask);
router.get("/singleTask/:taskId", VerifyToken, singleTask);
router.get("/AllredyGiven", VerifyToken, allreadyGiven);
router.get("/getJobTask",VerifyToken,  getJobTask);
module.exports = router;
