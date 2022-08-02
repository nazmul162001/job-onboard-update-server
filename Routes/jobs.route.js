const { getJobs } = require("../Controllers/jobs.controller");
const router = require("express").Router();

router.get("/", getJobs);

module.exports = router;

