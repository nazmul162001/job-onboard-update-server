const router = require("express").Router();
const {
  getBlogs,
  singleBlogDetails,
} = require("../Controllers/blogsContollers");

router.get("/allBlogs", getBlogs);
router.get("/allBlogs/:blogId", singleBlogDetails);

module.exports = router;
