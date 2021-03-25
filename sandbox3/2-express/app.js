const express = require("express");
const app = express();
const PORT = 5000;


// req => middleware => res


app.get('/', (req, res)=>{
  res.send('2home');
})

app.get('/about', (req, res)=>{
  res.send('about');
})


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
