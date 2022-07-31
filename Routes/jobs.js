const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("This is job api route testing by emtiaz" );
});

module.exports = router;
