const { ObjectId } = require("mongodb");
const client = require("../Connection/connection");
const paymentCollection = client.db("jobOnboard").collection("payments");

const getPayment = async (req, res) => {
  const allPayment = await paymentCollection.find({}).toArray();
  res.send(allPayment);
};

const paymentInfo = async (req, res) => {
  const id = req.params.paymentId;
//   console.log(id);
  const query = { _id: ObjectId(id) };
  const result = await paymentCollection.findOne(query);
  res.send(result);
};

module.exports = {
  getPayment,
  paymentInfo,
};
