const client = require("../../Connection/connection");
const employeesDataCollection = client.db("jobOnboard").collection("employees");

// Add new employe for company
const addEmployee = async (req, res) => {
  const employeData = req.body;
  const result = await employeesDataCollection.insertOne(employeData);
  res.send(result);
};
// Get all employe details
const getEmployee = async (req,res)=>{
  const getAllEmployeDetails = await employeesDataCollection.find({}).toArray()
  res.send(getAllEmployeDetails)
}
// Edit all employe details
module.exports = {
  addEmployee,
  getEmployee
};
