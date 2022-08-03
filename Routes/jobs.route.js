const router = require("express").Router();

const { allJob, singleJob , addNewJob} = require("../Controllers/jobs.controller");


router.get("/", allJob);
router.get("/:jobId", singleJob);
router.post("/", addNewJob);

module.exports = router;

