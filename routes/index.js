var api  = require('./wiki_api');

exports.search = function ( req, res ) {
    var lang  = req.params.lang;
    var query = req.params.query;

    api.search_for( query, lang, function ( suggestions ) {
        res.render( 'suggestions.html', {
            title     : query,
            suggestions : suggestions
        });
    });
};

exports.grab = function ( req, res ) {
    var lang  = req.params.lang;
    var query = req.params.query;

    api.revisions_of( query, lang, function ( revisions ) {
        res.render( 'list.html', {
            title     : query,
            revisions : revisions
        });
    });
};
