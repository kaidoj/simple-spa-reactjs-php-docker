var request = require('request');

var headers = {
  'Content-Type': 'application/json'
};

var dataString = ''{"docker_tag": '$''{process.env.CIRCLE_BRANCH}"}'';

var options = {
  url: '', // add your docker url aka 'https://registry.hub.docker.com/u/{{the rest of your url}}'
  method: 'POST',
  headers: headers,
  body: dataString
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}

request(options, callback);