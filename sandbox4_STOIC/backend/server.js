const express = require("express");
const app = express();
const PORT = 5000;
const pool = require("./db");

app.use(express.json());

// ROUTES //

// get all todos

// get a todo

// create a todo
app.post("/todos", async (req, res) => {
  try {
    //await req.body()
    console.log(req.body);
  } catch (err) {
    console.log(err);
  }
});

// update a todo

// delete a todo

app.get("/", (req, res) => {
  res.json({ message: "Go Time!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
