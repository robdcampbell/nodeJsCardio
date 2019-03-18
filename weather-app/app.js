const request = require('request');
const geocode = require('./utils/geocode')

const url = 'https://api.darksky.net/forecast/79494146fff4f77959b3266cf506a1ca/37.8267,-122.4233';


// // Weather request from Darksky

// request({ url: url,json:true }, (error,response)=>{
//     if(error){
//         console.log('Unable to connect to weather service')
//     } else if(response.body.error){
//         console.log('Unable to find location')
//     } else {
//         const current = response.body.currently;
//         console.log(`${response.body.daily.data[0].summary} It is currently ${current.temperature} degrees out. There is a ${current.precipProbability}% chance of rain.`)
//     }
// })

// Geocoding:
// Address -> Lat/Long -> Weather

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/detroit.json?access_token=pk.eyJ1IjoicmRlYW5jYW1wYmVsbCIsImEiOiJjanQ2NnVtc3kwYnRqNDl0bWZ3dm14djZnIn0.2uwRjrVyvd0JdIqh8Zjirg&limit=1';


// // Geo request from mapbox
// request({url: geocodeURL, json:true}, (error,response)=>{
//     if(error){
//         console.log('Unable to connect to weather services');
//     } else if(response.body.features.length === 0){
//         console.log('Unable to find location, try again with different search term');
//     } else {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log(`${latitude} , ${longitude}`);
//     }
// })



geocode('New York', (error, data) => {
    console.log('Error', error);
    console.log('Data',data);
})