_app = (function (){
    var that = {};

    that.init = function ( target_url ) {
        $('#results').hide();

        $('#query-button').click( function () {
            $('#query-form').submit();
        });

        $('#query-form').submit( function () {
            var query = $('#query-field').val();
            var lang  = $('#lang-field').val();

            if( !!query ) {
                $('#results').fadeOut( 25 );

                _store.get_propositions( query, lang, function ( data ) {
                        show_propositions( data, target_url );
                });
            }

            return false;
        });
    };

    function show_propositions( data, target_url ) {
        var propositions = data['propositions'];
        var results_prop = $('#results-propositions');
        var lang = $('#lang-field').val();

        // remove previously displayed results
        results_prop.empty();

        if( !propositions.length ) {
            results_prop.append( '<h2>Brak wyników. Spróbuj jeszcze raz!</h2>' );
        }
        // add new results
        results_prop.append( propositions.map( function ( e ) {
            return '<li>' +
                     '<a href="/'+ target_url +'/'+ lang +'/'+ encodeURIComponent( e ) +'">' +
                       '<p class="button">' + e +'</p>' +
                     '</a>' +
                   '</li>';
        }).join( '' ) );

        // show results
        $('#results').fadeIn( 250 );
    }

    return that;
})();
