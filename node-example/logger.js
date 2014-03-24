var url = require('url'),
    http = require('http'),
    server = http.createServer(function (request, response) {
        var url_parts = url.parse(request.url, true);
        console.log(url_parts.query.message);

        response.writeHead(200);
        response.end();
    });

server.listen(8080);