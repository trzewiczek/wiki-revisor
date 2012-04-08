_diagram = (function () {
    var that = {};

    that.draw = function( data, mode, image_width, image_height ) {
        if ( mode === 1 ) {
            draw_single( data, image_width, image_height );
        } else {
            draw_double( data, image_height, image_height );
        }
    };

    function draw_single( data, image_width, image_height ) {
        var values = data.map( function ( e ) {
            return e['changes1'];
        });
        var column_width = get_column_width( image_width, values );
        var height_multiplier = get_height_multiplier( image_height, values );

        var vis = new pv.Panel()
            .width( image_width )
            .height( image_height );

        vis.add( pv.Bar )
            .data( values )
            .width( column_width )
            .height( function( d ) { console.log(d * height_multiplier); return d * height_multiplier; } )
            .bottom( 0 )
            .left( function() { return this.index * column_width; })
            .anchor("top")
            .add( pv.Label )
            .textBaseline( function(d) { return (d < .2) ? "bottom" : "top";} )

        vis.render();
    };

    function draw_double( data, image_width, image_height ) {
        var upper_values = data.map( function ( e ) {
            return e['changes1'];
        });
        var lower_values = data.map( function ( e ) {
            return e['changes2'];
        });
        var column_width = get_column_width( image_width, upper_values );
        var height_multiplier = get_height_multiplier( image_height, upper_values, lower_values );

        var vis = new pv.Panel()
            .width( image_width )
            .height( image_height );

        vis.add( pv.Bar )
            .data( upper_values )
            .width( column_width )
            .height( function( d ) { return d * height_multiplier; } )
            .bottom( image_height / 2 )
            .left( function() { return this.index * column_width; })
            .anchor("top")
            .add( pv.Label )
            .textBaseline( function(d) { return (d < .2) ? "bottom" : "top";} );

        vis.add( pv.Bar )
            .data( lower_values )
            .width( column_width )
            .height( function( d ) { return d * height_multiplier; } )
            .top( image_height / 2 )
            //.bottom(
            .left( function() { return this.index * column_width; })
            .anchor("bottom")
            .add( pv.Label )
            .textBaseline( function(d) { return (d < .2) ? "top" : "bottom";} )

        /*vis.add(pv.Bar)
            .anchor("bottom")
            .add( pv.Label )
            .textMargin(5)
            .textAlign("right")
            .text(function() { data[ this.index ]['time']; } );
        */

        vis.render();
    };

    return that;


    function get_column_width( width, data ) {
        var elements = data.length;

        return ( elements !== 0 ) ? ( width / elements ) : 0;
    }

    function get_height_multiplier( height, values, values2 ) {
        var values_nr = ( !!values2 ) ? 2 : 1;
        var values2 = values2 || [];
        var all_values = values.concat( values2 );
        var max_height = max_value( all_values ) * values_nr;

        return ( max_height !== 0 ) ? ( height / max_height ) : 0;
    }

    function max_value( array ) {
        return Math.max.apply( Math, array );
    }

})();
