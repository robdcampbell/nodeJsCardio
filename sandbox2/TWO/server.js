const http = require("http");
const fs = require("fs");
const _ = require("lodash");
const PORT = 3000;

const server = http.createServer((req, res) => {
  // lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log("Hello");
  });
  greet();
  greet();

  // Set Header for the response
  res.setHeader("Content-Type", "text/html");

  // create defaut path to access the html files, relative this server file
  let path = "./views/";

  // Route Switch using NODE.JS (Before implementing Express.js)
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send and html file
  fs.readFile(path, (err, data) => {
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
