const { ObjectId } = require("mongodb");
const client = require("../Connection/connection");
const paymentCollection = client.db("jobOnboard").collection("payments");
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// all payment
const getPayment = async (req, res) => {
  const allPayment = await paymentCollection.find({}).toArray();
  res.send(allPayment);
};

// single payment id

const paymentInfo = async (req, res) => {
  const id = req.params.paymentId;
  //   console.log(id);
  const query = { _id: ObjectId(id) };
  const result = await paymentCollection.findOne(query);
  res.send(result);
};

// post method

const makePayment = async (req, res) => {
  const service = req.body;
  const price = service.price;
  // console.log(price)
  if (price) {
    const amount = Number(price) * 100;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    // console.log(paymentIntent);
    res.send({ clientSecret: paymentIntent.client_secret });
  }
};

//

module.exports = {
  getPayment,
  paymentInfo,
  makePayment,
};
