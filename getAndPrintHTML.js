var https = require('https');


function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var arr = [] ;

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      arr.push(data);
    });

    response.on('end', function() {
      for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
      }

      console.log('Response stream complete.');
    });
  });
}






getAndPrintHTML();
