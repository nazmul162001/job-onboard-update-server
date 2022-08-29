const client = require("../Connection/connection");
const submittedTaskCollection = client
  .db("jobOnboard")
  .collection("submittedTask");

const submitTaskFromCandidate = async (req, res) => {
  const taskInformation = req.body;
  const result = await submittedTaskCollection.insertOne(taskInformation);
  res.send(result);
};

const getSubmittedTask = async (req,res) => {
  const allTask = await submittedTaskCollection.find({}).toArray()
  res.send(allTask)
}

module.exports = {
  submitTaskFromCandidate,
  getSubmittedTask
};
