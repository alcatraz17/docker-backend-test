const express = require("express");

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

app.listen(4070, () => {
  console.log("Server running on port 4070");
});
