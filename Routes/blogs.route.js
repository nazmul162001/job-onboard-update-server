const router = require("express").Router();
const {
  getBlogs,
  singleBlogDetails,
  addBlogs,
} = require("../Controllers/blogsContollers");
const VerifyAdmin = require("../VerifyAdmin/VerifyAdmin");
const VerifyToken = require("../VerifyToken/VerifyToken");

router.get("/allBlogs", getBlogs);
router.post("/addBlogs", VerifyToken, VerifyAdmin, addBlogs);
router.get("/allBlogs/:blogId", singleBlogDetails);

module.exports = router;
