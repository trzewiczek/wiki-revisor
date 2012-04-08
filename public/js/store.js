_store = (function (){
    var that = {};

    function show_preloader( key ) {
        var mgs = {
            'query': 'Szukam w Wikipedii podobnych haseł. Wikipedia jest duża, więc to może chwilę potrwać!'
        };

        console.log( mgs[key] );
    }
    that.get_propositions = function( query, lang, callback ) {
        $.ajax({
            url     : '/propositions',
            data    : {
                'query': query,
                'lang' : lang
            },
            dataType: 'json',
            type    : 'GET',
            success : function ( received_data ) {
                callback( received_data );
            },
            error   : function ( err ) {
                // TODO: remove
                $('body').append( '<h1>ERROR!!</h1>' );
                console.log( err );
                callback( { 'error': err } );
            }
        });
    };

    that.get_cached_data = function( query, lang, callback ) {
        get_data( query, lang, true, callback );
    };

    that.get_fresh_data = function( query, lang, callback ) {
        get_data( query, lang, false, callback );
    };

    function get_data( query, lang, cached, callback ) {
        $.ajax({
            url     : '/data',
            data    : {
                'query'  : query,
                'lang'   : lang,
                'cached' : cached
            },
            dataType: 'json',
            type    : 'GET',
            success : function ( received_data ) {
                console.log( received_data );
                callback( received_data['data'] );
            },
            error   : function ( err ) {
                // TODO: remove
                $('#app').append( '<h1>ERROR!!</h1>' );
                console.log( err );
                callback( { 'error': err } );
            }
        });
    };

    return that;
})();
