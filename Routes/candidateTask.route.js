const router = require("express").Router();
const {
  giveCandidateTask,
  getHrTask,
  allreadyGiven,
} = require("../Controllers/candidateTask.controller");
const VerifyToken = require("../VerifyToken/VerifyToken");
router.post("/candidateTask", VerifyToken, giveCandidateTask);
router.get("/AllredyGiven", VerifyToken, allreadyGiven);
router.get("/getHrTask", VerifyToken, getHrTask);
module.exports = router;
