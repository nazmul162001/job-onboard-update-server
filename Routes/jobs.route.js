const router = require("express").Router();
const VerifyToken = require("../VerifyToken/VerifyToken");
const {
  allJob,
  getOnlyJobs,
  singleJob,
  getAllJobs,
  addNewJob,
  deleteJob,
  updateJob,
} = require("../Controllers/jobs.controller");

router.get("/", allJob);
router.get("/all", VerifyToken, getAllJobs);
router.get("/hrJobs", VerifyToken, getOnlyJobs);
router.get("/:jobId", singleJob);
router.post("/", addNewJob);
router.delete("/all/:id", VerifyToken, deleteJob);
router.put("/:id", VerifyToken, updateJob);

module.exports = router;
