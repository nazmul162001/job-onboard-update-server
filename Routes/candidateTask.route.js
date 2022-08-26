const router = require("express").Router();
const {
  giveCandidateTask,
} = require("../Controllers/candidateTask.controller");
const VerifyToken = require("../VerifyToken/VerifyToken");
router.post("/candidateTask", VerifyToken, giveCandidateTask);
module.exports = router;
