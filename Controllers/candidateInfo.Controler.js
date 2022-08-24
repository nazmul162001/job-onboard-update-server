const client = require("../Connection/connection");
const { ObjectId } = require("mongodb");
const candiDateCollection = client.db("jobOnboard").collection("candidates");
const AddCandidateInfo = async (req, res) => {
  const newCandidate = req.body;
  const result = await candiDateCollection.insertOne(newCandidate);
  res.send(result);
};

const getHrCandidates = async (req, res) => {
  const email = req.query.email;
  const decodedEmail = req.decoded.email;
  const query = {hrEmail:email}
  if(decodedEmail === email){
    const hrCandidate = await candiDateCollection.find(query).toArray()
    return res.send(hrCandidate)
  }else{
    return res.status(403).send({ message: 'forbidden access' });
  }
};

module.exports = {
  AddCandidateInfo,
  getHrCandidates
};
