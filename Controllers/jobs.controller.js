const client = require("../Connection/connection");
const jobsCollection = client.db("jobOnboard").collection("jobs");

const getJobs = async (req, res) => {
  const jobs = await jobsCollection.find({}).toArray();
  // res.send("This is job api route testing by emtiaz" );
  res.send(jobs);
  
};

module.exports = {
  getJobs,
};
