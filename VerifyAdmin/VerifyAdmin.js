const client = require("../Connection/connection.js");
const usersCollection = client.db("jobOnboard").collection("users");
const VerifyAdmin = async (req, res, next) => {
  await client.connect();
  const query = req.decoded.uid;

  const userAccount = await usersCollection.findOne({ uid: query });

  const isAdmin = userAccount?.role === "admin";
  if (isAdmin) {
    next();
  } else {
    res.status(403).send({ success: false, message: "Forbidden Access." });
  }
};

module.exports = VerifyAdmin;
