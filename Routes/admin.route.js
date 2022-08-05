const { isAdminController } = require("../Controllers/admin.controller");
const VerifyToken = require("../VerifyToken/VerifyToken");

const router = require("express").Router();
router.get("/", VerifyToken, isAdminController);
module.exports = router;
