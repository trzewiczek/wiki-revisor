var http = require('http');
var qstr = require('querystring');
var _    = require('underscore');


exports.search = function ( req, res ) {
    var lang  = req.params.lang;
    var query = req.params.query;
    var opts  = opts_for( 'search', lang, query );

    var api_req = http.request( opts, function ( api_res ) {
        var data = '';

        api_res.setEncoding('utf-8');
        api_res.on('data', function ( chunk ) {
            data += chunk;
        });

        api_res.on('end', function () {
            res.write( data );
            res.end();
        });
    });

    api_req.end();
};

// P R I V A T E   I N T E R F A C E
// get-in for revisions
function revisions_from( data ) {
    var data = data.constructor === String ? JSON.parse( data ) : data;
    // { "query":{ "pages":{ "699151":{ "revisions":[/* DATA */] }}}}
    return _.values( data['query']['pages'] )[0]['revisions'];
}


// api call options
function opts_for( type, lang, query ) {
    var params = {
        search: {
            action   : 'query',
            format   : 'json',
            list     : 'search',
            srsearch : query
        },
        grab: {
            action   : 'query',
            format   : 'json',
            titles   : query,
            prop     : 'revisions',
            rvlimit  : 100,
            rvdir    : 'newer',
            rvprop   : 'user|userid|size|timestamp'
        }
    };
    var options = {
        host: lang + '.wikipedia.org',
        port: 80,
        path: '/w/api.php?' + qstr.stringify( params[type] ),
        method: 'GET',
        headers: {
            'User-Agent': 'NodeJS Wiki Client'
        }
    };

    console.log( '>>> ' + options.host + options.path );
    return options;
}
