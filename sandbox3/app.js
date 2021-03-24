const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Pterodactyl Ptime");
});

app.listen(5000, () => {
  console.log(`Listening on port ${PORT}`);
});
