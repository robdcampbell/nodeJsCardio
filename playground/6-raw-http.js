const https = require('https');
const url = `https://api.darksky.net/forecast/79494146fff4f77959b3266cf506a1ca/40,-75`;

https.request(url, (response) => {

    response.on('data', (chunk) => {

    })

})

// BEGIN AT 6:48