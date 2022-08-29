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
  const filter = {
    $and: [
      { hrEmail: req.query?.email },
      { applicantId: req.query?.applicantId },
    ],
  };
  console.log(filter);
  const result = await submittedTaskCollection.find(filter).toArray();
  return res.send(result);
}

module.exports = {
  submitTaskFromCandidate,
  getSubmittedTask
};
