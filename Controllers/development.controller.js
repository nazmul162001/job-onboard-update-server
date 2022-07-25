const client = require("../Connection/connection");
const development = client.db("jobOnboard").collection("development");

const developmentController = async (req, res) => {
  const team = await development.find({}).toArray();
  res.send({ success: true, data: team });
};

module.exports = {
  developmentController,
};
