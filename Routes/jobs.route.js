const router = require("express").Router();
const VerifyToken = require("../VerifyToken/VerifyToken");
const { allJob, getOnlyJobs, singleJob , addNewJob,deleteJob,updateJob} = require("../Controllers/jobs.controller");


router.get("/", allJob);
router.get("/hrJobs", VerifyToken, getOnlyJobs);
router.get("/:jobId", singleJob);
router.post("/", addNewJob);
router.delete("/:id", VerifyToken, deleteJob);
router.put("/:id", VerifyToken, updateJob);

module.exports = router;

