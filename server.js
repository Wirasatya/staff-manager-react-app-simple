require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

// app config
const PORT = process.env.PORT || 2300;
const app = express();
app.use(express.json());
app.use(cors());

// connect db
const connectDB = require("./servers/database/conncetion");
connectDB();

// routes
app.use("/api/staff", require("./servers/routes/staffRoute"));

// production

// listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
