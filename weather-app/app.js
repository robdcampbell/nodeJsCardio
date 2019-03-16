const request = require('request');

const url = 'https://api.darksky.net/forecast/79494146fff4f77959b3266cf506a1ca/37.8267,-122.4233';


// request({ url: url,json:true }, (error,response)=>{
//     // console.log(response.body.currently)
//     const current = response.body.currently;
//     console.log(`${response.body.daily.data[0].summary} It is currently ${current.temperature} degrees out. There is a ${current.precipProbability}% chance of rain.`)
// })

// GEOcode using mapbox:

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmRlYW5jYW1wYmVsbCIsImEiOiJjanQ2NnVtc3kwYnRqNDl0bWZ3dm14djZnIn0.2uwRjrVyvd0JdIqh8Zjirg&limit=1';

request({url: geocodeURL, json:true}, (error,response)=>{
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(`${latitude} , ${longitude}`);
})

