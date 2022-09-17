const { ObjectId } = require("mongodb");
const client = require("../Connection/connection");
const paymentCollection = client.db("jobOnboard").collection("payments");

const getPayment = async (req, res) => {
  const allPayment = await paymentCollection.find({}).toArray();
  res.send(allPayment);
};

module.exports = {
  getPayment,
};
