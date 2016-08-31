define( [ 'plugin/charts/nvd3/common/wrapper' ], function( NVD3 ) {
    return Backbone.Model.extend({
        initialize: function( app, options ) {
            options.type = 'lineWithFocusChart';
            new NVD3( app, options );
        }
    });
});