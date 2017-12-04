var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log(response.statusMessage, response.headers['content-type']);
         console.log('Download complete.');

       })
       .pipe(fs.createWriteStream('./future.jpg'))
                      // Note 4

console.log('Downloading image...');
