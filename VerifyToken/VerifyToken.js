var jwt = require("jsonwebtoken");
const VerifyToken = (req, res, next) => {
  const authToken = req?.headers?.authorization?.split(" ")[1];

  if (!authToken) {
    return res
      .status(401)
      .send({ success: false, message: "Unauthorized Users" });
  }
  jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (err) {
      return res
        .status(403)
        .send({ success: false, message: "Forbidden Request." });
    }
    req.decoded = decoded;
    next();
  });
};
module.exports = VerifyToken;
