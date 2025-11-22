const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router = require("./routes");
const cors = require("cors");


dotenv.config();
const app = express();
connectDB();
app.use(cors({
  origin: "http://localhost:5173",   
  credentials: true
}));

app.use(express.json());
app.use("/api", router);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App is listening on PORT : ${port}`);
});