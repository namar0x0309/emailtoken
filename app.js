var connect = require('connect');
var http = require('http');
var url  = require('url');

var app = connect();

// gzip/deflate outgoing responses
var compression = require('compression');
app.use(compression());

// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/tokenFor', function (req, res, next) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    console.log(query); //{Object}

    res.end("End");

})

//create node.js http server and listen on port
http.createServer(app).listen(3000);
