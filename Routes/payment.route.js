const router = require("express").Router();
const { getPayment, paymentInfo, makePayment } = require("../Controllers/paymentController");
// const VerifyAdmin = require("../VerifyAdmin/VerifyAdmin");
// const VerifyToken = require("../VerifyToken/VerifyToken");
const VerifyToken = require("../VerifyToken/VerifyToken");

router.get("/makePayment", getPayment);
router.get("/paymentInfo/:paymentId", paymentInfo);
router.post("/create-payment-intent", VerifyToken, makePayment);

module.exports = router;
