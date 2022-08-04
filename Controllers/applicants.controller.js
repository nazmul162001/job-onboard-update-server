const client = require("../Connection/connection");
const applicantsCollection = client.db("jobOnboard").collection("applicants");

const newApplicant = async (req, res) => {
  const data = req.body;
  const result = await applicantsCollection.insertOne(data);
  res.send(result);
}

const getApplicants = async (req,res) => {
  const applicants = await applicantsCollection.find({}).toArray()
  res.send(applicants)
}

module.exports = {
  newApplicant,
  getApplicants,

};
