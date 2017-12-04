module.exports = function getHTML (options, callback) {
  var https = require('https');



  var arr = " " ;

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      arr += data + '/';
      callback(data);

    });

    response.on('end', function() {

      console.log('Response stream complete.');
    });
  });

};



// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step4.html'
// };


// getHTML(requestOptions, printHTML);