const jwt = require("jsonwebtoken");
const client = require("../Connection/connection.js");
const usersCollection = client.db("jobOnboard").collection("users");
const loginController = async (req, res) => {
  await client.connect();
  const body = req.body;
  const query = { email: body.email };
  const updateDoc = {
    $set: body,
  };
  const options = { upsert: true };
  const result = await usersCollection.updateOne(query, updateDoc, options);
  const token = jwt.sign(body, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "7d",
  });
  res.send({ result, token });
};

module.exports = { loginController };
