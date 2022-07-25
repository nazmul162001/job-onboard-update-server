const router = require("express").Router();
const { welcomeTeam } = require("./../Controllers/welcome.controller.js");
router.get("/welcome", welcomeTeam);

module.exports = router;
