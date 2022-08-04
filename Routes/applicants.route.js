const router = require("express").Router();

const {newApplicant, getApplicants} = require("../Controllers/applicants.controller");

router.get("/", getApplicants);
router.post("/", newApplicant);

module.exports = router;

