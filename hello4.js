var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', doRequest);
server.listen(1337);

function doRequest(req, res) {
    // readFileの第三引数はコールバック関数
    fs.readFile('./index.html', 'UTF-8', doRead);
    var title = 'サンプルページ';
    var msg = 'これはプログラムで用意したメッセージです';

    function doRead(err, data) {
        // replaceでテンプレの置換
        var str = data.replace(/@@@title@@@/g, title).replace(/@@@message@@@/, msg); // ☆
        res.setHeader('Content-Type', 'text/html');
        res.write(str);
        res.end();
    }
}

console.log('Serer running at http://127.0.0.1:1337/');
