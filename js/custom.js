$(document).ready(function(){
    

});

$('.navbar-toggler').on('click', function(e){
    e.preventDefault();
    $('.navbar-collapse').addClass('show').slideToggle();
});