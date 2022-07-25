const client = require("../Connection/connection");
const usersCollection = client.db("jobOnboard").collection("users");

const getUsers = async (req, res) => {
  const users = await usersCollection.find({}).toArray();
  if (users) {
    res.send({ success: true, data: users });
  } else {
    res.status(403).send({
      success: false,
      message: "You are not Authorized to perform this action",
    });
  }
};

module.exports = {
  getUsers,
};
