const client = require("../Connection/connection");
const applicantsCollection = client.db("jobOnboard").collection("applicants");

const newApplicant = async (req, res) => {
  const data = req.body;
  const result = await applicantsCollection.insertOne(data);
  res.send(result);
};

const getApplicants = async (req, res) => {
  const applicants = await applicantsCollection.find({}).toArray();
  res.send(applicants);
};

const getApplicantsCount = async (req, res) => {
  const email = req.query.email;
  const decodedEmail = req.decoded.email;
  const query = { hrEmail: email };
  if (decodedEmail === email) {
    const applicantsCount = await applicantsCollection.find(query).toArray();
    return res.send(applicantsCount);
  } else {
    return res.status(403).send({ message: "forbidden access" });
  }
};

module.exports = {
  newApplicant,
  getApplicants,
  getApplicantsCount,
};
