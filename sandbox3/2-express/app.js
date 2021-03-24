const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resources not found");
});

app.listen(5000, () => {
  console.log(`Server is listenin on port 5000...`);
});
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
