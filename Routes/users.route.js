const {
  updateProfile,
  getProfileDetails,
  getAllUsers,
  makeHr,
  putUserRole,
  deleteUser,
  removeUserRole,
} = require("../Controllers/users.controller");
const VerifyToken = require("../VerifyToken/VerifyToken.js");
const VerifyAdmin = require("../VerifyAdmin/VerifyAdmin.js");
const router = require("express").Router();

router.patch("/", VerifyToken, updateProfile);
router.get("/", VerifyToken, getProfileDetails);
router.get("/all", VerifyToken, VerifyAdmin, getAllUsers);
router.put("/hr", VerifyToken, makeHr);
router.put("/admin", VerifyToken, VerifyAdmin, putUserRole);
router.put("/removeAdmin", VerifyToken, VerifyAdmin, removeUserRole);
router.delete("/", VerifyToken, VerifyAdmin, deleteUser);

module.exports = router;
