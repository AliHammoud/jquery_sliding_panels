$(document).ready(function(){
    

    $('.sliding_popup').sliding_popup().init();
    
    $('#toggle_popup').click(function(){

        $('.sliding_popup').css({
            'opacity':'1.0',
            'left': '50%'
        });
        
    });
    
    
});
