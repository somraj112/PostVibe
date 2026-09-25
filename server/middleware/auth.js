const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    let token = req.cookies.token;

    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        msg: "Authentication required",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.token)
      .select("-password")
      .populate("followers")
      .populate("threads")
      .populate("replies")
      .populate("reposts");

    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      msg: "Invalid or expired token",
    });
  }
};

module.exports = auth;