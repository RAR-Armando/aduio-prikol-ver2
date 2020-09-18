




$(function(){
$('.menu-img').on('click', function(){
   $(this).toggleClass("menu-active");
});


   $('.menuToggle').on('click', function() {
      
      
      $('.menu').slideToggle(300, function(){
           if( $(this).css('display') === "none"){
               $(this).removeAttr('style');
           }
      });
   });
   });

