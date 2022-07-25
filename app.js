/* Init Server  */
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const usersRouter = require("./Routes/users.route.js");
const kironRouter = require("./Routes/kiron.route.js");
/* Set Middle wares  */
app.use(cors());
app.use(express.json());

/* ALL ENDPOINTS PUTTING HERE  */

app.use("/users", usersRouter);
app.use("/", kironRouter);

/* testing api  */
app.get("/", (req, res) => {
  res.send({ success: true, message: "Welcome to the API" });
});

/* not found routes */
app.use((req, res, next) => {
  res.status(404).send({ success: false, message: "Not Found Route" });
});
/* Server Error Routes */
app.use((err, req, res, next) => {
  res
    .status(500)
    .send({ success: false, message: "Something Broke of your API" });
});

module.exports = app;
