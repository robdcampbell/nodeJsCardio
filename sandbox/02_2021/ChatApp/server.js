const express = require('express');
const app = express();

// listen
// use

app.use(express.static(__dirname))

const server = app.listen(3089, ()=>{
    console.log(`Server is running on port: ${server.address().port}`);
})