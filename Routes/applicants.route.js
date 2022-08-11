const router = require("express").Router();
const VerifyToken = require("../VerifyToken/VerifyToken");

const {
  newApplicant,
  getApplicants,
  getApplicantsCount,
} = require("../Controllers/applicants.controller");

router.get("/", getApplicants);
router.get("/count", VerifyToken, getApplicantsCount);
router.post("/", newApplicant);

module.exports = router;
