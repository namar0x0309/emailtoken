var crypto = require('crypto');

exports.randomBytes = function (size, res)
{
    crypto.randomBytes( size, function( err, buffer ) {
        var token = buffer.toString( "hex" );
        res.end( token );
    } );

}

