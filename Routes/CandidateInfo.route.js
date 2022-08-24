const router = require("express").Router();
const { AddCandidateInfo } = require("../Controllers/candidateInfo.Controler");
router.post("/addCandidateInfo", AddCandidateInfo);
module.exports = router;
