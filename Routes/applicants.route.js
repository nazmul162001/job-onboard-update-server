const router = require("express").Router();
const VerifyToken = require("../VerifyToken/VerifyToken");

const {
  newApplicant,
  getApplicants,
  getApplicantsCount,
  getOnlyApplicant
} = require("../Controllers/applicants.controller");

router.get("/", getApplicants);
router.get("/applied", VerifyToken, getOnlyApplicant);
router.get("/count", VerifyToken, getApplicantsCount);
router.post("/", newApplicant);

module.exports = router;
