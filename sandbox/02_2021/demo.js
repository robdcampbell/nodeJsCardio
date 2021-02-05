//const _ = require('lodash');

// Using lodash to create an instance of a random number.
// console.log(_.random(1,10));


// - - - - - - - - - - - - - - - - - //

// working with (fs) fileSystem
/*

        const fs = require('fs');
        const data = require('./data.json')
        console.log(data.name)

        const fromData = fs.readFile('sandbox/02_2021/data.json', "utf-8", (err,data)=>{
            var parsedData = JSON.parse(data);
            console.log(parsedData);
        })
*/

// Access Directories:
    const fs = require('fs');

    // read a directory
        /*
            fs.readdir("/Users/Rob/Desktop/webDev",(err,data)=>{
                console.log(data);    
            })
        */
    // write to a file
    
    
    const data = {
        name: "Pterodactyl"
    }

    fs.writeFile('sandbox/02_2021/data.json', JSON.stringify(data),(err)=>{
        console.log('all set!', err)
    });
