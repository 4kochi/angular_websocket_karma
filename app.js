/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , http = require('http')
    , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port') + ' in mode ' + app.get('env'));
});

var io = require('socket.io').listen(server);

server.listen(80);

app.get('/index', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

app.get('/socket', function (req, res) {
    res.sendfile(__dirname + '/public/indexWithSocket.html');
});

app.get('/test', function (req, res) {
    res.render('runner');
});

//io.configure('development', function(){
//    io.set('transports', [
////        'websocket',
////        'flashsocket',
////        'htmlfile',
//        'xhr-polling',
//        'jsonp-polling'
//    ]);
//});

io.set('transports', [
//    'websocket',
//    'flashsocket',
//    'htmlfile',
    'xhr-polling',
    'jsonp-polling'
]);

io.sockets.on('connection', function (socket) {
    socket.on('getAll', function (data, callback) {
        console.log('getAll')

        var result = [
            {name: 'Picard', description: 'Captain'},
            {name: 'Crusher', description: 'Wayne'},
            {name: 'Riker', description: 'Number One'},
            {name: 'Worf', description: 'Security'}
        ]

        callback(result);
    });
});

