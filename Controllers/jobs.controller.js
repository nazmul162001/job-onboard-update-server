const client = require("../Connection/connection");
const { ObjectId } = require("mongodb");

//collections
const jobsCollection = client.db("jobOnboard").collection("jobs");

const allJob = async (req, res) => {
  // res.send("This is job api route testing by emtiaz" );

  const { search, location, cat, salary, type } = req.query;
  const page = req.query?.page || 1;
  const show = req.query?.show || 10;
  // if (search) {
  // http://localhost:5000/jobs?search=react&page=1&show=10&location=Remote&cat=%27%27&salary=%27%27

  const searchExpQuery = new RegExp(search, 'i');
  const locationRegExp = new RegExp(location, 'i');
  const categoryRegExp = new RegExp(cat, 'i');
  const typeRegExp = new RegExp(type, 'i');
  const jobType = type?.split(',')


  let jobTypeObj = {}

  // FOR CHECK LENGTH JOB TYPE 
  if (jobType?.length > 1) {
    jobTypeObj = { jobType: { $in: [...jobType] } }
  }

  else {
    jobTypeObj = { jobType: { $regex: typeRegExp } }
  }

  let filter =
  {
    "$and":
      [
        { jobTitle: { $regex: searchExpQuery } },
        { location: { $regex: locationRegExp } },
        jobTypeObj,
        { category: { $regex: categoryRegExp } },
      ]
  }




  const cursor = jobsCollection.find({})
  let jobs;
  if (page || pageJobs) {
    jobs = await cursor.skip(page * pageJobs).limit(pageJobs).toArray()
  }
  else {
    jobs = await cursor.toArray()
  }
  res.send(jobs)


  // const jobs = await jobsCollection.find({}).toArray();
  // res.send(jobs);
};

const getOnlyJobs = async (req, res) => {
  const email = req.query.email;
  const decodedEmail = req.decoded.email;
  const query = { hrEmail: email };
  if (decodedEmail === email) {
    const hrJobs = await jobsCollection.find(query).toArray();
    return res.send(hrJobs);
  } else {
    return res.status(403).send({ message: "forbidden access" });
  }
};

const singleJob = async (req, res) => {
  const { jobId } = req.params;
  const job = await jobsCollection.findOne({ _id: ObjectId(jobId) });
  res.json(job);
};

const addNewJob = async (req, res) => {
  const data = req.body;
  const result = await jobsCollection.insertOne(data);
  res.send(result);
}



module.exports = {
  allJob,
  singleJob,
  addNewJob,
  getOnlyJobs,
};
