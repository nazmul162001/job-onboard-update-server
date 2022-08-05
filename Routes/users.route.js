const {
  updateProfile,
  getProfileDetails,
  getAllUsers,
  makeHr,
  makeNormalUser,
} = require("../Controllers/users.controller");
const VerifyToken = require("../VerifyToken/VerifyToken.js");
const router = require("express").Router();

router.patch("/", VerifyToken, updateProfile);
router.get("/", VerifyToken, getProfileDetails);
router.get("/all", getAllUsers);
router.put("/hr", VerifyToken, makeHr);
router.put("/", VerifyToken, makeNormalUser);

module.exports = router;
