const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const app = express();

const corsOptions = {
  origin: "https://postvibe-sigma.vercel.app",
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 

app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
connectDB();

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App is listening on PORT : ${port}`);
});