const express = require("express");
const app = express();
const PORT = 5000;
const people = require("./routes/people");

// assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
//parse JSON
app.use(express.json());

app.use("/api/people", people);

// app.get("/", (req, res) => {
//   res.send(`iTTS a MEEEE MARIOOOOO`);
// });

app.post("/login", (req, res) => {
  let { name } = req.body;
  if (name) {
    res.send(`Hello ${name}!`);
  } else {
    res.status(401).send("Please provide credentials...");
  }
});

app.listen(PORT, () => {
  console.log(`Server is listenin on port ${PORT}...`);
});
