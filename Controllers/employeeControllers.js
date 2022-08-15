const client = require("../Connection/connection");
const employeesDataCollection = client.db("jobOnboard").collection("employees");
const { ObjectId } = require("mongodb");
const { query } = require("express");
// Add new employe for company
const addEmployee = async (req, res) => {
  const employeData = req.body;
  const result = await employeesDataCollection.insertOne(employeData);
  res.send(result);
};
// Get all employe details
const getEmployee = async (req, res) => {
  const getAllEmployeDetails = await employeesDataCollection.find({}).toArray();
  res.send(getAllEmployeDetails);
};

// const getEmployee = async (req, res) => {
//   const email = req.query.userEmail;
//   const decodedEmail = req.decoded.email;
//   if (decodedEmail === email) {
//     const query = { email: email };
//     const getuserEmployee = await employeesDataCollection.find(query).toArray();
//     res.send(getuserEmployee);
//   }
// };

// Edit all employe details
const editEployee = async (req, res) => {
  const id = req.params.id;
  const employeDetails = req.body;
  const filter = { _id: ObjectId(id) };
  const option = { upsert: true };
  const updateDoc = {
    $set: employeDetails,
  };
  const results = await employeesDataCollection.updateOne(
    filter,
    updateDoc,
    option
  );
  res.send(results);
};
// delete employe data
const deleteEmployeData = async (req, res) => {
  const deleteEmployeId = req.params.id;
  const findId = { _id: ObjectId(deleteEmployeId) };
  const deleteData = await employeesDataCollection.deleteOne(findId);
  res.send(deleteData);
};
const singleDetails = async (req, res) => {
  const id = req.params.detailsId;
  const query = { _id: ObjectId(id) };
  const result = await employeesDataCollection.findOne(query);
  res.send(result);
};

module.exports = {
  addEmployee,
  getEmployee,
  editEployee,
  deleteEmployeData,
  singleDetails,
};
