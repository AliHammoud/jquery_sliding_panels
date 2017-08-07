(function( $ ){

    $.fn.sliding_popup = function(options) {
        
        var settings = $.extend({
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
            'height': settings.height,
            'width': settings.width,
            'border-radius': '10pt',
            'padding': '10pt',
            'position': 'absolute',
            'z-index': '1000',
            'left': '150%',
            'top': '50%',
            'transform': 'translate(-50%,-50%)'            
        });

        this.prepend('<div class="popup_controls"><p>' + settings.title + '</p><i id="close_sliding_popup" class="fa fa-times" aria-hidden="true"></i></div>');

        $('.popup_controls').css({
            'display': 'flex',
            'justify-content': 'space-between'
        });

        $close = $('#close_sliding_popup');

        $close.css('cursor', 'pointer');

        $close.click(function(){

            $('.sliding_popup').css('left', '150%');
            $('.popup_support').css('left', '150%');
        });

        
        $('body').append('<div class="popup_support"><div class="popup_controls"><p>' + settings.title + '</p><i id="close_supporting_popup" class="fa fa-times" aria-hidden="true"></i></div></div>');

        $('.popup_support').css({
            'transition': '0.35s',
            'background-color': 'white',
            'color': 'black',
            'opacity': '0',
            'height': settings.height,
            'width': settings.width/2,
            'border-radius': '10pt',
            'padding': '10pt',
            'position': 'absolute',
            'z-index': '1000',
            'left': '150%',
            'top': '50%',
            'transform': 'translate(-50%,-50%)'
        });

        $close = $('#close_supporting_popup');

        $close.css('cursor', 'pointer');

        $close.click(function(){

            $('.popup_support').css('left', '150%');
            $('.sliding_popup').css('left', '50%');
        });
        

        return this;
        
    };
    
    $.fn.show = function(options) {
        return this.css({
            'transition-timing-function': 'ease-out',
            'opacity':'1.0',
            'left': '50%'
        });
    };
    
    $.fn.show_supporting = function(options){
        
        var settings = $.extend({
            title: 'Title',
            width: '400px',
            height: '300px',
            transition: '0.2s'
        }, options );
        
        this.css({
            'left':'0'
        })
        
        $('.popup_support').css({
            'width': settings.width,
            'opacity':'1',
            'left': '60%'
        });
        
        return this;
    }
    
})( jQuery );