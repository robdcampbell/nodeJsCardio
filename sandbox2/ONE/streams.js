const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// listening to the data event on the readStream
/*
    readStream.on("data", (chunk) => {
      console.log("------------ NEW CHUNK -------------");
      console.log(chunk);
      writeStream.write("\nNEW CHUNK\n");
      writeStream.write(chunk);
    });
*/

// Will pipe everything being read in readStream definition into writeStream
readStream.pipe(writeStream);
