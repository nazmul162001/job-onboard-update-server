const client = require("../Connection/connection");
const { ObjectId } = require("mongodb");

//collections
const jobsCollection = client.db("jobOnboard").collection("jobs");

const allJob = async (req, res) => {
  const jobs = await jobsCollection.find({}).toArray();
  // res.send("This is job api route testing by emtiaz" );
  res.send(jobs);
};

const singleJob = async (req, res) => {
  const { jobId } = req.params;
  const job = await jobsCollection.findOne({ _id: ObjectId(jobId) });
  res.json(job);
};

const addNewJob = async (req, res) => {
  const data = req.body;
  const result = await jobsCollection.insertOne(data);
  res.send(result);
}

module.exports = {
  allJob,
  singleJob,
  addNewJob,
  
};
