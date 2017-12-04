

function getAndPrintHTML (options) {
  var https = require('https');



  var arr = " " ;

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      arr += data + '/';
    });

    response.on('end', function() {
      for(var i = 0; i < arr.length; i++){
        console.log(arr);
      }

      console.log('Response stream complete.');
    });
  });
}


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };




getAndPrintHTML(requestOptions);

