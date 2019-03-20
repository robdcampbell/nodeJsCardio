const https = require('https');
const url = `https://api.darksky.net/forecast/79494146fff4f77959b3266cf506a1ca/40,-75`;

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
        console.log(chunk);
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })

})

request.on('error',(error) => {
    console.log('An error', error);
})

request.end()

// BEGIN AT 6:48