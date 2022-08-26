const client = require("../Connection/connection");
const taskCollection = client.db("jobOnboard").collection("tasks");

const giveCandidateTask = async (req, res) => {
  const taskInfo = req.body;
  const result = await taskCollection.insertOne(taskInfo);
  res.send(result);
};

module.exports = {
  giveCandidateTask,
};
