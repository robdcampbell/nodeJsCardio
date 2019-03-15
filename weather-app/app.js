const request = require('request');

const url = 'https://api.darksky.net/forecast/79494146fff4f77959b3266cf506a1ca/37.8267,-122.4233';


request({ url: url,json:true }, (error,response)=>{
    // console.log(response.body.currently)
    const current = response.body.currently;
    console.log(`${response.body.daily.data[0].summary} It is currently ${current.temperature} degrees out. There is a ${current.precipProbability}% chance of rain.`)
})



//  HERE IT IS DUMMY: 

// https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmRlYW5jYW1wYmVsbCIsImEiOiJjanQ2NnVtc3kwYnRqNDl0bWZ3dm14djZnIn0.2uwRjrVyvd0JdIqh8Zjirg


// BROKEN ::::: NEED TO FIX 

// const geocodeURL = 'https://api.mabox.com/geocoding/v5/mapbox.places/Los%Angeles.json?access_token=pk.eyJ1IjoicmRlYW5jYW1wYmVsbCIsImEiOiJjanQ2NnVtc3kwYnRqNDl0bWZ3dm14djZnIn0.2uwRjrVyvd0JdIqh8Zjirg'

// request({ url: geocodeURL,json:true }, (error,response)=>{
//     const data =  response.body;
//     const latitude = data.latitude;
//     const longitude = data.longitude;
//     console.log(`My latitude is ${latitude} and my longitude is ${longitude}`);
// });



