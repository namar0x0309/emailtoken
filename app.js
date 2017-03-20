var connect = require('connect');
var http = require('http');
var url  = require('url');
var crypto = require('crypto');

var app = connect();

var DEFAULT_TOKEN_SIZE = 16

var isDebug = true;

// gzip/deflate outgoing responses
var compression = require('compression');
app.use(compression());

// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/token', function (req, res, next) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    DebugPrint(query); //{Object}

    crypto.randomBytes( query["size"] > 0? parseInt( query[ "size" ] ) : DEFAULT_TOKEN_SIZE, function( err, buffer ) {
        var token = buffer.toString( "hex" );
            res.end( token );
    } );

})

//create node.js http server and listen on port
http.createServer(app).listen(3000);

/********************* Helpers ****************************/

// crypto hashing
function sha256( data )
{
    return crypto.createHash('sha256').update( data ).digest( "base64" );
}
/********************* Debug ****************************/

function DebugPrint( arg )
{
    if( !isDebug ) return;
    console.log( arg );
}
