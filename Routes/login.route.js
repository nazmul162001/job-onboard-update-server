const { loginController } = require("../Controllers/login.controller");
const router = require("express").Router();
router.put("/", loginController);
module.exports = router;
