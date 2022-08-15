const router = require("express").Router();
const VerifyToken = require("../VerifyToken/VerifyToken");

const {
  getApplicant,
  newApplicant,
  getApplicants,
  getApplicantsCount,
  getOnlyApplicant
} = require("../Controllers/applicants.controller");

router.get("/", getApplicants);
router.get("/applied", VerifyToken, getOnlyApplicant);
router.get("/count", VerifyToken, getApplicantsCount);
router.get("/show", VerifyToken, getApplicant);
router.post("/", newApplicant);

module.exports = router;
