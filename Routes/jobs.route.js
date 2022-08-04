const router = require("express").Router();

const { allJob, singleJob , addNewJob} = require("../Controllers/jobs.controller");


router.get("/jobs", allJob);
router.get("/jobs/:jobId", singleJob);
router.post("/jobs", addNewJob);

module.exports = router;

