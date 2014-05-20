var http = require('http');
// HTMLファイルを読み込んで利用するためにFSオブジェクトというものを利用する
var fs = require('fs');

var server = http.createServer();
server.on('request', doRequest);
server.listen(1337);

function doRequest(req, res) {
    fs.readFile('./index.html', 'UTF-8', doRead);

    function doRead(err, data) {
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
    }
}

console.log('Server running at http://127.0.0.1:1337/');










