(function( $ ){
    
    /*
    $.fn.sliding_popup = function(title, width, height, transition) {
        
        this.css({
            'transition': '0.2s',
            'background-color': 'white',
            'color': 'black',
            'height': '300px',
            'width': '400px',
            'border-radius': '10pt',
            'padding': '10pt',
            'position': 'absolute',
            'z-index': '1000',
            'left': '50%',
            'top': '50%',
            'transform': 'translate(-50%,-50%)'
        });

        this.prepend('\
            <div class="popup_controls">\
                <p>' + 'Title' + '</p>\
                <i id="close_sliding_popup" class="fa fa-times" aria-hidden="true"></i>\
            </div>'
        );
        
        $('.popup_controls').css({
            'display': 'flex',
            'justify-content': 'space-between'
        });

        $close = $('#close_sliding_popup');

        $close.css('cursor', 'pointer');

        $close.click(function(){
            alert('hi');
        });
        
        return this;
    };*/
    
    var methods = {
        init : function(options) {
            
            var settings = $.extend({
                // These are the defaults.
                title: 'Title',
                width: '400px',
                height: '300px',
                transition: '0.2s'
            }, options );
            
            this.css({
                'transition': '0.35s',
                'background-color': 'white',
                'color': 'black',
                'opacity': '0',
                'height': '300px',
                'width': '400px',
                'border-radius': '10pt',
                'padding': '10pt',
                'position': 'absolute',
                'z-index': '1000',
                'left': '150%',
                'top': '50%',
                'transform': 'translate(-50%,-50%)'
            });

            this.prepend('\
                <div class="popup_controls">\
                    <p>' + 'Title' + '</p>\
                    <i id="close_sliding_popup" class="fa fa-times" aria-hidden="true"></i>\
                </div>'
            );

            $('.popup_controls').css({
                'display': 'flex',
                'justify-content': 'space-between'
            });

            $close = $('#close_sliding_popup');

            $close.css('cursor', 'pointer');

            $close.click(function(){
                
                $('.sliding_popup').css('left', '150%');
            });


            return this;
            
        },
        show : function() {

            $('.sliding_popup').css('left', '150%');
        },
        hide : function( ) {  },
        update : function( content ) {  }
    };

    $.fn.sliding_popup = function(methodOrOptions) {
        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.sliding_popup' );
        }

    };
    
    /*
    $.fn.extend({
        init : function(options) {

            var defaults = {
                // These are the defaults.
                title: 'Title',
                width: '400px',
                height: '300px',
                transition: '0.2s'
            };
            
            options = $.extend(defaults, options);

            this.css({
                'transition': options.transition,
                'background-color': 'white',
                'color': 'black',
                'height': options.height,
                'width': options.width,
                'border-radius': '10pt',
                'padding': '10pt',
                'position': 'absolute',
                'z-index': '1000',
                'left': '50%',
                'top': '50%',
                'transform': 'translate(-50%,-50%)'
            });

            this.prepend('\
                <div class="popup_controls">\
                    <p>' + settings.title + '</p>\
                    <i id="close_sliding_popup" class="fa fa-times" aria-hidden="true"></i>\
                </div>'
                        );
            $('.popup_controls').css({
                'display': 'flex',
                'justify-content': 'space-between'
            });

            $close = $('#close_sliding_popup');

            $close.css('cursor', 'pointer');

            $close.click(function(){
                alert('hi');
            });

        }
    });
    */
    
})( jQuery );