const client = require("../Connection/connection");
const { ObjectId } = require("mongodb");
const candiDateCollection = client.db("jobOnboard").collection("candidates");
const AddCandidateInfo = async (req, res) => {
    const newCandidate = req.body;
    const result = await candiDateCollection.insertOne(newCandidate);
    res.send(result);
  };

  module.exports ={
    AddCandidateInfo
  }