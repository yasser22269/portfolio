$(function(){
    'use strict';





 //start popUp
 $('.pop-button').click(function(e){
    e.preventDefault();
    $('.popup').fadeIn(1000);
})
$(".popup .Click").click(function(){
    $(".popup").hide();
   })
//end popUp




//Start scroll to top buttom
    $(window).scroll(function(){

        
        if($(window).scrollTop() >= 580){
            $(".scrolltotop").fadeIn(1500);
        }else{
         $(".scrolltotop").fadeOut(1500);
        }
        //End scroll to top buttom


        
 




    })
    //Start scroll to go up
    $(".scrolltotop").click(function(e){
     e.preventDefault();         //يمنع المعتاد
     $("html,body").animate({
         scrollTop:0
     },500)
    })

    



        //start progress bar
        $('.skill-data .progress .progress-bar').each(function(){
            $(this).animate({
                width:$(this).attr('data-progress')
            },2000)
    
        })
        //End progress bar
//Start scroll Top

    //     $(".copyright .navs li a , .navbar li a").click(function(e){
    //         e.preventDefault();              //يمنع المعتاد
    //         $("html,body").animate({
    //     scrollTop: $("#" + $(this).data("scroll")).offset().top-10
    //         },1500)
    //     })

    // //End scroll Top
    //loading

    // var loader = function() {
	// 	setTimeout(function() { 
	// 		if($('#ftco-loader').length > 0) {
	// 			$('#ftco-loader').removeClass('show');
	// 		}
	// 	}, 2000);
	// };
	// loader();
  
   

   

});