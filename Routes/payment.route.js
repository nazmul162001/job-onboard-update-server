const router = require("express").Router();
const { getPayment } = require("../Controllers/paymentController");
// const VerifyAdmin = require("../VerifyAdmin/VerifyAdmin");
// const VerifyToken = require("../VerifyToken/VerifyToken");

router.get("/makePayment", getPayment);

module.exports = router;
