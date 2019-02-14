  $('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
        $(this).find(".overlay").css("opacity","0");
     }else{
       $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    	$(this).find(".overlay").css("opacity","1");
    }
});
