const { ObjectId } = require("mongodb");
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
  const result = await submittedTaskCollection.find().toArray();
  return res.send(result);
}

const singleSubmission = async (req, res) => {
  const query = { applicantId: req.params.applicantId };
  const result = await submittedTaskCollection.findOne(query);
  res.send(result);
};

const singleSubmittedTask = async (req, res) => {
  const id = req.params.taskID;
  const query = { _id: ObjectId(id) };
  const result = await submittedTaskCollection.findOne(query);
  res.send(result);
};

module.exports = {
  submitTaskFromCandidate,
  getSubmittedTask,
  singleSubmission,
  singleSubmittedTask
};
