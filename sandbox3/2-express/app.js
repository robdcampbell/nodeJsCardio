const express = require("express");
const app = express();
const PORT = 5000;
let { people } = require("./data");

// assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
//parse JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`iTTS a MEEEE MARIOOOOO`);
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, people });
  console.log("people requested....");
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res
      .status(400)
      .json({ success: false, msg: "Please provide a name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res
      .status(400)
      .json({ success: false, msg: "Please provide a name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

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
