const { getUsers } = require("./../Controllers/users.controller.js");
const router = require("express").Router();

router.get("/all", getUsers);

module.exports = router;
