// サーバを起動するメインの部分
var http = require('http');

var server = http.createServer();
server.on('request', doRequest);
server.listen(1234);

// 実際にクライアントからアクセスのあった部分をonで呼ぶ
function doRequest(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello!');
    res.end();
}
