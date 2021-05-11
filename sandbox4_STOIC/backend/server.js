const express = require("express");
const app = express();
const PORT = 5000;
const pool = require("./db");

app.use(express.json());

// ROUTES //

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");

    res.status(200).json(allTodos.rows);
  } catch (error) {
    console.error(error);
  }
});

// get a specific todo
app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id=($1)", [
      id,
    ]);
    res.status(200).json(todo.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

// create a todo
app.post("/todos", async (req, res) => {
  try {
    //await req.body()
    const { description } = req.body;
    //PAY ATTENTION TO THE RETURNING KEYWORD
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.status(200).json(newTodo.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  try {
    const updateTodo = await pool.query(
      "UPDATE todo SET description=($1) WHERE todo_id=($2)",
      [description, id]
    );
    res.status(200).json(`Todo ${id} was updated`);
  } catch (error) {
    console.error(error);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id=($1)", [
      id,
    ]);

    res.status(200).json(`Todo ${id} deleted!`);
  } catch (error) {
    console.error(error);
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Go Time!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
