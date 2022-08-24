const router = require("express").Router();
const { AddCandidateInfo, getHrCandidates } = require("../Controllers/candidateInfo.Controler");
const VerifyToken = require("../VerifyToken/VerifyToken");
router.post("/addCandidateInfo", AddCandidateInfo);
router.get("/hrCanditates",VerifyToken, getHrCandidates);
module.exports = router;
