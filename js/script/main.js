$(document).ready(function() {
    $('.header-nav-btn__menu').click(function(event) {
        $('.header-nav-btn__menu,.header-nav-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header-nav-menu-list').click(function(event){
        $('.header-nav-btn__menu,.header-nav-menu').removeClass('active');
        $('body').removeClass('lock')
    });
        
});