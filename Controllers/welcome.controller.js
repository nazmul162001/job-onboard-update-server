const client = require("../Connection/connection");
const welcome = client.db("jobOnboard").collection("welcome");

const welcomeTeam = async (req, res) => {
  const team = await welcome.find({}).toArray();
  res.send({ success: true, data: team });
};

module.exports = {
  welcomeTeam,
};
