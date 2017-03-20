var connect = require('connect');
var http = require('http');
var url  = require('url');
var emailtoken = require('./emailtoken');

var app = connect();

var DEFAULT_TOKEN_SIZE = 16

var isDebug = true;

// gzip/deflate outgoing responses
var compression = require('compression');
app.use(compression());

// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

/*
    Example Inputs:
    http://127.0.0.1:3000/token
    http://127.0.0.1:3000/token?size=3
    http://127.0.0.1:3000/token?size=64
    http://127.0.0.1:3000/token?size=128
*/
app.use('/token', function (req, res, next) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    DebugPrint(query); //{Object}
    
    emailtoken.randomBytes( query["size"] > 0? parseInt( query[ "size" ] ) : DEFAULT_TOKEN_SIZE, res );
})

//create node.js http server and listen on port
http.createServer(app).listen(3000);

/********************* Debug ****************************/

function DebugPrint( arg )
{
    if( !isDebug ) return;
    console.log( arg );
}
