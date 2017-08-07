$(document).ready(function(){
    

    $('.sliding_popup').sliding_popup({
        title: "Popup Title",
        width: "90%",
        height: "90%"
    });
    
    $('#toggle_popup').click(function(){

        $('.sliding_popup').show();
        
    });
    
    $('#extra_toggle').click(function(){
        
        $('.sliding_popup').show_supporting();
        
    })
    
    
});
