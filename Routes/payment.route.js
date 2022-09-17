const router = require("express").Router();
const { getPayment, paymentInfo } = require("../Controllers/paymentController");
// const VerifyAdmin = require("../VerifyAdmin/VerifyAdmin");
// const VerifyToken = require("../VerifyToken/VerifyToken");

router.get("/makePayment", getPayment);
router.get("/paymentInfo/:paymentId", paymentInfo);

module.exports = router;
