const client = require("../Connection/connection");

const usersCollection = client.db("jobOnboard").collection("users");
const isHrController = async (req, res) => {
  const uid = req.query.uid;
  const decodedID = req.decoded.uid;
  if (decodedID === uid) {
    const userAccount = await usersCollection.findOne({ uid: decodedID });
    const isHr = userAccount?.role === "hr";
    res.send({ isHr: isHr });
  } else {
    res.status(403).send({ success: false, message: "Forbidden request" });
  }
};

module.exports = { isHrController };