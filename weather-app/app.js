const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast.js');

// Goal: Accept location via comman line argument 

// 1. Access the command line argument without yargs
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided
// 4. Test your work with a couple of locations

// geocode('New York', (error, data) => {
//     if(error){
//       return console.log(error);
//     }

//     forecast(data.latitude, data.longitude, (error, forecastData) => {
//        if(error){
//            return console.log(error);
//        }
       
//        console.log(data.location);
//        console.log(forecastData);
//     })
// })


const command = process.argv[2];

if(typeof command === 'string'){
    console.log('true');
} else {
    console.log('try something else');
};
