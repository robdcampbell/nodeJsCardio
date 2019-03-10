const fs = require('fs');

// const book = {
  //   title: 'Post Office',
  //   author: 'Charles Bukowski'
  // }

  // const bookJSON = JSON.stringify(book);
  // fs.writeFileSync('1-json.json', bookJSON);

  // const dataBuffer = fs.readFileSync('1-json.json');
  // const dataStr = dataBuffer.toString();
  // const data = JSON.parse(dataStr);

  // console.log(data.title);


    // read buffer file
  const bufferData = fs.readFileSync('./1-json.json');
    // make a JSON string from the buffer data
  const dataStr = bufferData.toString();
    // Parse the JSON data
  const data = JSON.parse(dataStr);

    // Update data info
    data.name = 'Andrew';
    data.age = '26';

    // Turn 'data' back into a string
  const dataJSON = JSON.stringify(data);
    // Overwrite existing file with updated JSON data
  fs.writeFileSync('./1-json.json',dataJSON);
  console.log(dataJSON);






