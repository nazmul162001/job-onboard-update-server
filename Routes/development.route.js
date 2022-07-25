const router = require("express").Router();
const {
  developmentController,
} = require("./../Controllers/development.controller.js");
router.get("/development", developmentController);

module.exports = router;
