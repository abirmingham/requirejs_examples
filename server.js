var connect = require('connect');

connect.createServer(
    connect.static(__dirname)
).listen('8080', '127.0.0.1');
