const request = require('request');

const geocode = (address,callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicmRlYW5jYW1wYmVsbCIsImEiOiJjanQ2NnVtc3kwYnRqNDl0bWZ3dm14djZnIn0.2uwRjrVyvd0JdIqh8Zjirg&limit=1`;

  request({url: url, json:true}, (error, response) => {
      if(error){
          callback('Unable to connec to location services', undefined);
      } else if(response.body.features.length === 0){
          callback('Unable to find location, try again with different search term',undefined);
      } else {
          callback(undefined, {
              latitude: response.body.features[0].center[0],
              longitude: response.body.features[0].center[1],
              location: response.body.features[0].place_name
          })
      }
  })
}

module.exports = geocode;