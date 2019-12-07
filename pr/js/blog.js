$(document).ready(function(){
    //strat scrolll navbar
    $(window).on("scroll", function(){
        if( $(window).scrollTop()) {
            $(".navbar").css(
                {
                    "height":"50px",
                    "position":"fixed",
                    "borderBottom":"3px solid #09e",
                }
            );
            $(".navbar .container>ul").css(
                {
                    "lineHeight":"50px",
                }
            );
            $(".navbar .container>h1").css(
                {
                    "lineHeight":"50px",
                }
            );
        }else
        {
            $(".navbar").css({
                "height":"83px",
                "borderBottom":"0px solid #000",
            });
            $(".navbar .container>ul").css(
                {
                    "lineHeight":"80px",
                }
            );
            $(".navbar .container>h1").css(
                {
                    "lineHeight":"80px",
                }
            );
			$(".blog-page").css(
                {
                    "margin" : "80px auto",
                }
            );
			
        }
    });
    //end scroll navbar
});

