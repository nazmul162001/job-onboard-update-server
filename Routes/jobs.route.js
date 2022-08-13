const router = require("express").Router();
const VerifyToken = require("../VerifyToken/VerifyToken");
const { allJob, getOnlyJobs, singleJob , addNewJob} = require("../Controllers/jobs.controller");


router.get("/", allJob);
router.get("/hrJobs", VerifyToken, getOnlyJobs);
router.get("/:jobId", singleJob);
router.post("/", addNewJob);

module.exports = router;

