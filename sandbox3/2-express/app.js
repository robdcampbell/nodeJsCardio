const express = require("express");
const app = express();
const PORT = 5000;
const people = require("./routes/people");
const auth = require("./routes/auth");

// assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
//parse JSON
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.listen(PORT, () => {
  console.log(`Server is listenin on port ${PORT}...`);
});
