const router = require("express").Router();
const {
  getBlogs,
  singleBlogDetails,
  addBlogs,
  editBlog,
} = require("../Controllers/blogsContollers");
const VerifyAdmin = require("../VerifyAdmin/VerifyAdmin");
const VerifyToken = require("../VerifyToken/VerifyToken");

router.get("/allBlogs", getBlogs);
router.post("/addBlogs", VerifyToken, VerifyAdmin, addBlogs);
router.get("/allBlogs/:blogId",  singleBlogDetails);
router.put("/editBlogs/:id", editBlog);

module.exports = router;
