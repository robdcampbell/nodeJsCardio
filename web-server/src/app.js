const path = require('path');
const express = require('express');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views',viewsPath)

// Setup Static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('',(req,res) => {
  res.render('index',{
    title: 'Weather',
    name: 'Rob Campbell'
  })
})

app.get('/about',(req,res) => {
  res.render('about',{
    title: 'About Me',
    name: 'Rob Campbell'
  })
})

app.get('/help',(req,res) => {
  res.render('Help',{
    title: 'Help',
    name: 'Rob Campbell',
    message: 'Help is on the way!'
  })
})

app.get('/weather', (req,res) => {
  res.send({
    location: 'Detroit',
    forecast: 'Clear Skies and Sunny'
  });
})

app.listen(3000, () =>{
  console.log('Server is up on port 3000');
});