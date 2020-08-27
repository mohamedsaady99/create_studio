$(document).ready(function(){
   
    $('.nav-button').click(function(){
       $('nav ul li ').toggle();
        $('nav ul li:first-of-type ').css("display","block");
        $('.dropdown .dropdown-menu ').css("display","none");
        
   });
   $('.dropdown').mouseenter(function(){
       $('.dropdown .dropdown-menu ').css("display","block")
       $('.dropdown .dropdown-menu li').css("display","block");
   }) ;
   $('.dropdown .dropdown-menu').mouseleave(function(){
       $('.dropdown .dropdown-menu li').css("display","none")
   }) ;
});