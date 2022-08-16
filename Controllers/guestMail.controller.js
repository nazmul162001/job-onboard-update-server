const client = require("../Connection/connection");
const guestEmailCollection = client.db("jobOnboard").collection("guestEmail");

//New Email from guest
const addGuestEmail = async (req, res) => {
  const data = req.body;
  const result = await guestEmailCollection.insertOne(data);
  res.send(result);
}

const getAllGuestMail = async (req, res)  => {
  const getAllEmail = await guestEmailCollection.find({}).toArray();
  res.send(getAllEmail);
}

module.exports = {
  addGuestEmail,
  getAllGuestMail
};