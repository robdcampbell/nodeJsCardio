const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Go Time!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
