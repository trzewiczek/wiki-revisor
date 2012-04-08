_graph = (function () {
    var that = {};

    // args => [ { data: [], query: str, lang: str }, ... ]
    that.draw_graph = function ( args ) {

        function sketch( p5 ) {
            var i;
            var width, height;
            var margin_x = 30;
            var margin_y = 30;

            var today;
            var bar_num;
            var bar_width;
            var year_width;
            var years;

            var total_max_count;
            var max_counts
            var totals;
            var reference;

            var single;
            var doubles;

            p5.setup = function () {
                p5.size( 800, 300 + ( args.length * 200 ) );
                width  = p5.width - 60;
                height = p5.height - 60;

                // January, 2001 is the starting point of Wikipedia
                today      = new Date();
                years_num  = today.getFullYear() - 2000;
                bar_num    = years_num * 12;
                bar_width  = width / bar_num;
                year_width = bar_width * 12;

                max_counts = args.map( function ( e ) {
                        return e['data'].sort( function ( a, b ) {
                            return b['count'] - a['count'];
                            })[0]['count'];
                        });

                totals = args.map( function ( e ) {
                        return e['data'].map( function ( d ) {
                            return d['count'];
                            }).reduce( function ( a, b ) {
                                return a + b;
                                });
                        });

                total_max_count = max_counts.reduce( function ( a, b ) {
                        return Math.max( a, b );
                        });

                reference = total_max_count > 150 ? total_max_count : 150;

                single  = !!(args.length % 2);
                doubles = Math.floor( args.length / 2 );

                p5.noStroke();
                p5.fill( 255, 100 );
                p5.frameRate( 25 );

                var canvas = $('canvas');

                canvas.before( '<p style="margin: 15px 0px"><a class="button" href="http://' + args[0]['lang'] + '.wikipedia.org/wiki/' +  args[0]['query'] + '" target="_blank">Zobacz artykuł <b>' +  args[0]['query'] + '</b> na Wikipedii</a></p>' );
                if( !!args[1] ) {
                    canvas.after( '<p style="margin: 15px 0px"><a class="button" href="http://' + args[1]['lang'] + '.wikipedia.org/wiki/' +  args[1]['query'] + '" target="_blank">Zobacz artykuł <b>' +  args[1]['query'] + '</b> na Wikipedii</a></p>' );
                }
            };

            p5.draw = function() {
                var _args = [].concat( args );
                var _max_counts = [].concat( max_counts );
                var _totals = [].concat( totals );

                p5.background( 80 );
                p5.noStroke();
                p5.translate( margin_x, margin_y );

                p5.textFont( p5.createFont( 'sans-serif' ), 18 );
                p5.textAlign( p5.CENTER );

                // background annual stripes
                for( i = 0; i < years_num; ++i ) {
                    p5.fill( i % 2 == 0 ? 95 : 100 );
                    p5.rect( i * year_width, 0, year_width, height );

                    p5.fill( 130 );
                    p5.text( 2001 + i, i * year_width + year_width / 2, 30 );
                }

                // draw all paired queries
                for( i = 0; i < doubles; ++i ) {
                    // TODO make it list of hashes and simplify the drawing code
                    var pair_data = {
                            data: [ _args.shift(), _args.shift() ],
                            max_count: [ _max_counts.shift(), _max_counts.shift() ],
                            total: [ _totals.shift(), _totals.shift() ],
                            reference: reference
                    };

                    double_graph( pair_data, i * 500 );
                }
                // and finally the last one (if there is one)
                console.log( _args );
                if( single ) {
                    var single_data = {
                            data: _args.shift(),
                            max_count: _max_counts.shift(),
                            total: _totals.shift(),
                            reference: reference
                    };
                    console.log( p5.frameCount );
                    single_graph( single_data, doubles * 500 );
                }
            };

            function single_graph( single_data, position ) {
                var data = single_data['data'];

                p5.fill( 190 );
                p5.textFont( p5.createFont( 'sans-serif' ), 15 );

                p5.textAlign( p5.LEFT );
                p5.text( data['query'] + " (" + data['lang'] + ")", 5, -7 );

                p5.textAlign( p5.RIGHT );
                p5.text( "Liczba edycji: " + single_data['total'], width-5, -7 );

                p5.fill( 160 );
                p5.textFont( p5.createFont( 'sans-serif' ), 11 );
                p5.textAlign( p5.LEFT );

                data['data'].forEach( function ( e ) {
                    var x = (( e['year'] - 2001 ) * 12 + e['month'] - 1 ) * bar_width;
                    var w = bar_width * 0.75;
                    var h = height * 0.88 * ( e['count'] / single_data['reference'] );
                    var tmp_h = ( h / 20 ) * p5.frameCount;
                    if( p5.frameCount < 20 ) {
                        h = tmp_h;
                    }
                    else {
                        p5.noLoop();
                    }

                    if( single_data['max_count'] == e['count'] ) {
                        p5.pushStyle();

                        p5.fill( 255 );
                        p5.stroke( 150 );
                        p5.line( x, height - h, x + w + 30, height - h );
                        p5.text( single_data['max_count'], x + w + 3, height - h - 3 );

                        p5.noStroke();
                        p5.rect( x, height, w, -h );

                        p5.popStyle();
                    }
                    else {
                        p5.rect( x, height, w, -h );
                    }
                });

            }

            function double_graph ( pair_data, position ) {
                var data = pair_data['data'];

                p5.fill( 190 );
                p5.textFont( p5.createFont( 'sans-serif' ), 15 );

                p5.textAlign( p5.LEFT );
                p5.text( data[0]['query'] + " (" + data[0]['lang'] + ")", 5, -7 );
                p5.text( data[1]['query'] + " (" + data[1]['lang'] + ")", 5, height+20 );

                p5.textAlign( p5.RIGHT );
                p5.text( "Liczba edycji: " + pair_data['total'][0], width-5, -7 );
                p5.text( "Liczba edycji: " + pair_data['total'][1], width-5, height+20 );

                p5.fill( 160 );
                p5.textFont( p5.createFont( 'sans-serif' ), 11 );
                p5.textAlign( p5.LEFT );

                p5.pushMatrix();
                p5.translate( 0, -height * 0.47 );
                data[0]['data'].forEach( function ( e ) {
                    var x = (( e['year'] - 2001 ) * 12 + e['month'] - 1 ) * bar_width;
                    var w = bar_width * 0.75;
                    var h = height / 2 * 0.88 * ( e['count'] / pair_data['reference'] );
                    var tmp_h = ( h / 20 ) * p5.frameCount;
                    if( p5.frameCount < 20 ) {
                        h = tmp_h;
                    }

                    if( pair_data['max_count'][0] == e['count'] ) {
                        p5.pushStyle();

                        p5.fill( 255 );
                        p5.stroke( 150 );
                        p5.line( x, height - h, x + w + 30, height - h );
                        p5.text( pair_data['max_count'][0], x + w + 3, height - h - 3 );

                        p5.noStroke();
                        p5.rect( x, height, w, -h );

                        p5.popStyle();
                    }
                    else {
                        p5.rect( x, height, w, -h );
                    }
                });

                data[1]['data'].forEach( function ( e ) {
                    var x = (( e['year'] - 2001 ) * 12 + e['month'] - 1 ) * bar_width;
                    var w = bar_width * 0.75;
                    var h = height / 2 * 0.88 * ( e['count'] / pair_data['reference'] );
                    var tmp_h = ( h / 20 ) * p5.frameCount;
                    if( p5.frameCount < 20 ) {
                        h = tmp_h;
                    }
                    else {
                        p5.noLoop();
                    }

                    if( pair_data['max_count'][1] == e['count'] ) {
                        p5.pushStyle();

                        p5.fill( 255 );
                        p5.stroke( 150 );
                        p5.line( x, height + h, x + w + 30, height + h );
                        p5.text( pair_data['max_count'][1], x + w + 3, height + h + 11 );

                        p5.noStroke();
                        p5.rect( x, height, w, h );

                        p5.popStyle();
                    }
                    else {
                        p5.rect( x, height, w, h );
                    }
                });

                p5.strokeWeight( 2 );
                p5.stroke( 80 );
                p5.line( 0, height, width, height );

                p5.popMatrix();
            }

        }

        var canvas     = document.getElementById( 'paper' );
        var processing = new Processing( canvas, sketch );
    };

    return that;
})();
