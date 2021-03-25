const express = require("express");
const app = express();
const PORT = 5000;

// req => middleware => res

// 6:21

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(PORT, () => {
  console.log(`Server is listenin on port ${PORT}...`);
});
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
