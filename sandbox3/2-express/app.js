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

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id: ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  return res.status(201).json({ success: true, data: [...newPeople] });
});

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id: ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(PORT, () => {
  console.log(`Server is listenin on port ${PORT}...`);
});
