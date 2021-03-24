const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Home Page: Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
