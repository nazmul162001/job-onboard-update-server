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

const editBlog = async (req, res) => {
  const id = req.params.id;
  const editBlogDetails = req.body;
  const filter = { _id: ObjectId(id) };
  const option = { upsert: true };
  const updateDoc = {
    $set: editBlogDetails,
  };
  const results = await blogsCollection.updateOne(
    filter,
    updateDoc,
    option
  );
  res.send(results);
};


module.exports = {
  getBlogs,
  singleBlogDetails,
  addBlogs,
  editBlog
};
