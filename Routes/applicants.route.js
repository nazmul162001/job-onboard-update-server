const router = require("express").Router();
const VerifyToken = require("../VerifyToken/VerifyToken");

const {
  getApplicant,
  newApplicant,
  getApplicants,
  getOnlyApplicant,
  appliedjob
} = require("../Controllers/applicants.controller");

router.get("/", getApplicants);
router.get("/applied", VerifyToken, getOnlyApplicant);
router.get("/show", VerifyToken, getApplicant);
router.get("/appliedCandidate", VerifyToken, appliedjob);
router.post("/", newApplicant);

module.exports = router;
