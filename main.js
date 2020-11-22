$(document).ready(function(){

    // Ref
    var link = $('.dropdown > a');
    var menu = $('.dropdown > .dropdown-menu');

    // mostra  Toggle Menu
    link.click( function (){

        var menuAttuale = $(this).next('.dropdown-menu');
        menu.not(menuAttuale).hide();
        menuAttuale.toggle();
        
    });

}); 