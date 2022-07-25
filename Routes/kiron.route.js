const router = require("express").Router();
const { kironTheMoonLight } = require("./../Controllers/kiron.controller.js");
router.get("/kiron", kironTheMoonLight);

module.exports = router;
