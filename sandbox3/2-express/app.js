const express = require("express");
const app = express();
const PORT = 5000;
let { people } = require("./data");

// assets
app.use(express.static("./methods-public"));

app.get("/", (req, res) => {
  res.send(`iTTS a MEEEE MARIOOOOO`);
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, people });
});

app.listen(PORT, () => {
  console.log(`Server is listenin on port ${PORT}...`);
});
