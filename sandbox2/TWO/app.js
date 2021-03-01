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
  const blogs = [
    { title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet." },
    { title: "Mario finds stars", snippet: "Lorem ipsum dolor sit amet." },
    { title: "How to defeat Bowser", snippet: "Lorem ipsum dolor sit amet." },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

// 404 Page
app.use((req, res) => {
  res.status(404).render("404", { title: "Oops!" });
});
