const router = require("express").Router();
const { addGuestEmail,getAllGuestMail} = require('../Controllers/guestMail.controller')

router.get("/", getAllGuestMail);
router.post("/", addGuestEmail);

module.exports = router;

