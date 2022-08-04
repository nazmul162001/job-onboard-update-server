const { ObjectId } = require("mongodb");
const client = require("../Connection/connection");
const usersCollection = client.db("jobOnboard").collection("users");

const getProfileDetails = async (req, res) => {
  await client.connect();
  const decodedID = req.decoded.uid;
  const uid = req.query.uid;

  if (decodedID === uid) {
    const result = await usersCollection.findOne({ uid: uid });
    res.send({ success: true, result });
  } else {
    res.status(403).send({ success: false, message: "Forbidden request" });
  }
};

const getAllUsers = async (req, res) => {
  await client.connect();
  const result = await usersCollection.find({}).toArray();
  if (result) {
    res.send({ success: true, result });
  } else {
    res.status(403).send({ success: false, message: "Forbidden request" });
  }
};

const updateProfile = async (req, res) => {
  await client.connect();
  const data = req.body;
  const uid = req.query.uid;
  const decodedID = req.decoded.uid;
  const query = { uid: uid };
  const updateDoc = {
    $set: data,
  };
  if (decodedID === uid) {
    const result = await usersCollection.updateOne(query, updateDoc);
    if (result.acknowledged) {
      res.send({ success: true, message: "Update profile successfully" });
    }
  } else {
    res.status(403).send({ success: false, message: "Forbidden request" });
  }
};

const makeHr = async (req, res) => {
  await client.connect();
  const email = req.body.email;
  const filter = { email: email };
  const updateDoc = {
    $set: { role: "admin" },
  };
  const result = await usersCollection.updateOne(filter, updateDoc);
  if (result) {
    res.send({ success: true, message: "You're signed in as a HR Manager" });
  } else {
    res.status(403).send({ success: false, message: "Forbidden request" });
  }
};

const makeNormalUser = async (req, res) => {
  await client.connect();
  const email = req.body.email;
  const filter = { email: email };
  const updateDoc = {
    $set: { role: "user" },
  };
  const result = await usersCollection.updateOne(filter, updateDoc);
  if (result) {
    res.send({ success: true, message: "You're signed in as a HR Manager" });
  } else {
    res.status(403).send({ success: false, message: "Forbidden request" });
  }
};

module.exports = {
  updateProfile,
  getProfileDetails,
  getAllUsers,
  makeHr,
  makeNormalUser,
};
