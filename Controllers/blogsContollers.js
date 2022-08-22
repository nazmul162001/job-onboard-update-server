const { ObjectId } = require("mongodb");
const client = require("../Connection/connection");
const blogsCollection = client.db("jobOnboard").collection("blogs");

const getBlogs = async (req, res) => {
  const allBlogs = await blogsCollection.find({}).toArray();
  res.send(allBlogs);
};

const singleBlogDetails = async (req, res) => {
  const id = req.params.blogId;
  const query = { _id: ObjectId(id) };
  const result = await blogsCollection.findOne(query);
  res.send(result);
};

const addBlogs = async (req, res) => {
  const newBlog = req.body;
  const result = await blogsCollection.insertOne(newBlog);
  res.send(result);
};
module.exports = {
  getBlogs,
  singleBlogDetails,
  addBlogs,
};
