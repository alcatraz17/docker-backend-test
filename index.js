const express = require("express");
require("dotenv").config();

const { PORT = 3030 } = process.env;

const app = express();

app.get("/", (req, res) => {
  try {
    return res.json({
      message: "Server Healthy",
    });
  } catch (error) {
    return res.json({
      message: "Internal server error",
    });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port 4070");
});
