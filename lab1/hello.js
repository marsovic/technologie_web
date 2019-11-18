//IMPORT MOUDULES OR 'SOUS PROGRAMMES'
const url = require('url')
const qs = require('querystring')
const http = require('http')

const serverHandle = function (req, res) {
  const route = url.parse(req.url)
  const path = route.pathname 
  const params = qs.parse(route.query)

  res.writeHead(200, {'Content-Type': 'text/plain'});

	  if (path === '/hello') {
	  	if(params['name'] === 'Marko') {
	    	res.write('Hello ' + params['name'] + 'i m working on this lab at ECE!');
	  	}else{
	  		res.write('Hello ' + params['name']);
	  	}
	  } 
else {
 	res.write('Error 404');
 }

  res.end();
}

const server = http.createServer(serverHandle);
server.listen(8081)