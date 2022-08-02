const router = require("express").Router();

const { allJob, singleJob } = require("../Controllers/jobs.controller");


router.get("/", allJob);
router.get("/:jobId", singleJob);

module.exports = router;

