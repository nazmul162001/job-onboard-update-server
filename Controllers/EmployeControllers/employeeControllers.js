const client = require("../../Connection/connection");
const employeesDataCollection = client.db("jobOnboard").collection("employees");

// Add new employe for company
const addEmployee = async (req, res) => {
  const employeData = req.body;
  const result = await employeesDataCollection.insertOne(employeData);
  res.send(result);
};

module.exports = {
  addEmployee,
};
