const { getJobs } = require("../Controllers/jobs.controller");
const router = require("express").Router();

router.get("/jobs", getJobs);

module.exports = router;

