const express = require("express");
const app = express();
const PORT = 5000;
const { logger } = require("./logger");

app.use(logger);
app.use(express.json());

app.get("/", (req, res) => {
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
