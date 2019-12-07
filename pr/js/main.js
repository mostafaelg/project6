$(document).ready(function(){
    //strat scrolll navbar
    $(".header").height($(window).height());

	$(window).on("resize", function(){

        var wid = $(window).width(),

        hi = $(window).height();

        $(".header").height($(window).height());

        console.log(wid , hi);

	})
    $(window).on("scroll", function () {
        if ($(window).width() < 786) {
            $(".navbar .container h1").css("color", "#333");

            $(".navbar .container>ul").css
                (
                    {
                        "lineHeight": "50px",
                    }
            );
            
            $(".navbar").css
                (
                    {
                        "background": "#fff",
                        "position": "fixed",
                        "borderBottom": "3px solid #09e",
                    }
                );
            }
        
        if ($(window).width() > 786) {
            if ($(window).scrollTop()) {
                $(".navbar").css
                    (
                        {
                            "height": "50px",
                            "background": "#fff",
                            "position": "fixed",
                            "borderBottom": "3px solid #09e",
                        }
                    );
                $(".navbar .container>ul").css
                    (
                        {
                            "lineHeight": "50px",
                        }
                    );
                $(".navbar .container>h1").css
                    (
                        {
                            "lineHeight": "50px",
                        }
                    );
                $(".navbar .container>ul>li>a").css("color", "#333");
                $(".navbar .container h1").css("color", "#333");
                $(".navbar .container>ul>li>a").mouseenter(function () {
                    $(this).css("color", "#fff");
                });
                $(".navbar .container>ul>li>a").mouseleave(function () {
                    $(this).css("color", "#333");
                });
            }
            else {
                $(".navbar").css({
                    "height": "83px",
                    "background": "transparent",
                    "position": "fixed",
                    "borderBottom": "0px solid #000",
                });
                $(".navbar .container>ul").css
                    (
                        {
                            "lineHeight": "80px",
                        }
                    );
                $(".navbar .container>h1").css
                    (
                        {
                            "lineHeight": "80px",
                        }
                    );
                $(".navbar .container>ul>li>a").css("color", "#fff")
                $(".navbar .container h1").css("color", "#fff")
                $(".navbar .container>ul>li>a").mouseenter(function () {
                    $(this).css("color", "#fff")
                });
                $(".navbar .container>ul>li>a").mouseleave(function () {
                    $(this).css("color", "#fff")
                });
            }
        }
    });
    //end scroll navbar

    //start slide left

    $(".about_iteams .iteam").eq(0).hover(function(){

        $(".about_iteams .iteam .slide-left").eq(0).animate({
            width: '100%'
        },300)
    }, function(){
            $(".about_iteams .iteam .slide-left").eq(0).animate({
                width: 0
            },300)
    });

    $(".about_iteams .iteam").eq(1).hover(function () {

        $(".about_iteams .iteam .slide-left").eq(1).animate({
            width: '100%'
        }, 300)
    }, function () {
        $(".about_iteams .iteam .slide-left").eq(1).animate({
            width: 0
        }, 300)
    });
    $(".about_iteams .iteam").eq(2).hover(function () {

        $(".about_iteams .iteam .slide-left").eq(2).animate({
            width: '100%'
        }, 300)
    }, function () {
        $(".about_iteams .iteam .slide-left").eq(2).animate({
            width: 0
        }, 300)
    });

		///left---Right

		var slideCalss = $(".slide-left-right");

    slideCalss.eq(0).hover(function () {
        slideCalss.eq(0).find('span').animate({
            width: '51%'
        }, 500);
    }, function () {
          slideCalss.eq(0).find('span').animate({
            width: 0
        }, 500);
      });

			slideCalss.eq(1).hover(function () {
	        slideCalss.eq(1).find('span').animate({
	            width: '51%'
	        }, 500);
	    }, function () {
	          slideCalss.eq(1).find('span').animate({
	            width: 0
	        }, 500);
	      });

				slideCalss.eq(2).hover(function () {
		        slideCalss.eq(2).find('span').animate({
		            width: '51%'
		        }, 500);
		    }, function () {
		          slideCalss.eq(2).find('span').animate({
		            width: 0
		        }, 500);
		      });

					slideCalss.eq(3).hover(function () {
			        slideCalss.eq(3).find('span').animate({
			            width: '51%'
			        }, 500);
			    }, function () {
			          slideCalss.eq(3).find('span').animate({
			            width: 0
			        }, 500);
			      });

						slideCalss.eq(4).hover(function () {
				        slideCalss.eq(4).find('span').animate({
				            width: '51%'
				        }, 500);
				    }, function () {
				          slideCalss.eq(4).find('span').animate({
				            width: 0
				        }, 500);
				      });

							slideCalss.eq(5).hover(function () {
									slideCalss.eq(5).find('span').animate({
											width: '51%'
									}, 500);
							}, function () {
										slideCalss.eq(5).find('span').animate({
											width: 0
									}, 500);
								});


								//slide-down

								$(".slide-down").eq(0).hover(function(){

										$(".slide-down .down").eq(0).animate({
												height: '100%'
										},400)
								}, function(){
												$(".slide-down .down").eq(0).animate({
													 height: 0
												},400)
								});


								$(".slide-down").eq(1).hover(function(){

										$(".slide-down .down").eq(1).animate({
												height: '100%'
										},400)
								}, function(){
												$(".slide-down .down").eq(1).animate({
													 height: 0
												},400)
								});


								$(".slide-down").eq(2).hover(function(){

										$(".slide-down .down").eq(2).animate({
												height: '100%'
										},300)
								}, function(){
												$(".slide-down .down").eq(2).animate({
													 height: 0
												},400)
								});


});

//Toggle button menu
$(".toggle-menu").on("click", function () {
    $(".header .overlay .navbar .container>ul").slideToggle();
});
