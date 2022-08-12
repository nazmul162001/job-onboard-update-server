const { isHrController } = require("../Controllers/hr.controller");
const VerifyToken = require("../VerifyToken/VerifyToken");

const router = require("express").Router();
router.get("/", VerifyToken, isHrController);
module.exports = router;
