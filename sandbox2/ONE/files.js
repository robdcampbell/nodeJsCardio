// FILE SYSTEM
const fs = require("fs");

// Reading files
/*
    fs.readFile("./docs/blog1.txt", (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data.toString());
    });
  */
// Writing files
/*
      fs.writeFile("./docs/blog2.txt", "hello world, blogo post # 2!", () => {
        console.log("File was written to...");
      });
  */

// Directores files

if (!fs.existsSync("./assests")) {
  fs.mkdir("./assests", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("pterodactyl...");
  });
} else {
  fs.rmdir("./assests", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Directory Deleted!");
  });
}

// Deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
  });
}
