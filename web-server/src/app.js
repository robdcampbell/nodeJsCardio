const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views',viewsPath)
hbs.registerPartials(partialsPath);

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
  res.render('help',{
    title: 'Help',
    name: 'Rob Campbell',
    helpText: 'Help is on the way!'
  })
})

app.get('/weather', (req,res) => {
  
  if(!req.query.address){
    return res.send({
      error: 'You must provide an address.'
    })
  }

  res.send({
    location: 'Detroit',
    forecast: 'Clear Skies and Sunny',
    addres: req.query.address
  });
})



// PRODUCTS EXAMPLE
app.get('/products', (req,res) => {

    if(!req.query.search){
      return res.send({
        error: 'You must provide a search term'
      })
    }

   console.log(req.query);
   res.send({
     products: []
   })
})

  // Will match anything following '/help' (*wildcard within a particular pattern) 
app.get('/help/*',(req,res) => {
  res.render('404',{
    title: '404: Page not found',
    errorMessage: 'Help article not found!',
    name: 'Rob Campbell'
  })
})

// Will match anything (helpful for creating a 404 page, which is shown here)
app.get('*', (req,res)=> {
  res.render('404',{
    title: '404: Page not found',
    errorMessage: 'Whoops! 404: Page not found',
    name: 'Rob Campbell'
  })
})

app.listen(3000, () =>{
  console.log('Server is up on port 3000');
});