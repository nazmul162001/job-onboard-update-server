const client = require("../Connection/connection");
const candidateTaskCollection = client
  .db("jobOnboard")
  .collection("candidateTask");

const submitTaskFromCandidate = async (req, res) => {
  const taskInformation = req.body;
  const result = await candidateTaskCollection.insertOne(taskInformation);
  res.send(result);
};

module.exports = {
  submitTaskFromCandidate,
};
