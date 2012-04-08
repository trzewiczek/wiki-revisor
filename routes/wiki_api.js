var http = require('http');
var qstr = require('querystring');
var _    = require('underscore');

exports.search_for = function ( query, lang, callback ) {
    var opts = opts_for('search', query, lang );

    console.log( '>>>>> ' + opts.host + opts.path );
    var api_req = http.request( opts, function ( api_res ) {
        var data = '';

        api_res.setEncoding('utf-8');
        api_res.on('data', function ( chunk ) {
            data += chunk;
        });

        api_res.on('end', function () {
            callback( suggestions_from( data ) );
        });
    });

    api_req.end();

};

exports.revisions_of = function ( query, lang, callback ) {
    var opts = opts_for('revisions', query, lang );

    console.log( '>>>>> ' + opts.host + opts.path );
    var api_req = http.request( opts, function ( api_res ) {
        var data = '';

        api_res.setEncoding('utf-8');
        api_res.on('data', function ( chunk ) {
            data += chunk;
        });

        api_res.on('end', function () {
            callback( revisions_from( data ) );
        });
    });

    api_req.end();
};

function suggestions_from( data ) {
    var data = data.constructor === String ? JSON.parse( data ) : data;
    var suggestions = data['query']['search'].map( function ( e ) {
                                                       return e['title'];
                                                   });
    return suggestions;
}


function revisions_from( data ) {
    var data = data.constructor === String ? JSON.parse( data ) : data;
    // { "query":{ "pages":{ "699151":{ "revisions":[/* DATA */] }}}}
    return _.values( data['query']['pages'] )[0]['revisions'];
}


// api call options
function opts_for( type, query, lang ) {
    var params = {
        search: {
            action   : 'query',
            format   : 'json',
            list     : 'search',
            srsearch : query
        },
        revisions: {
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

