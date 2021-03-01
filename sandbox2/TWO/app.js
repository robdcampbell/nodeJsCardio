const express = require("express");
const app = express();
const PORT = 3000;

// register view engine(EJS)
app.set("view engine", "ejs");
// use a different folder: app.set("views", "exampleName");

// listen for requests
app.listen(PORT);

//  Set endpoints (routes)
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

// 404 Page
app.use((req, res) => {
  res.status(404).render("404");
});
