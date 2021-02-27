const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "./":
      path += "index.html";
      break;
    case "./about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }

  // send and html file
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(data);
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, () => {
  console.log("To infinity, and beyond!");
});
