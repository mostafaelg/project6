$(function(){
  ///nice scroll

  $('.navbar .container ul li a').on('click', function(event){

    //Nice scroll
    event.preventDefault();

    $('html,body').animate({

      scrollTop : $('#' + $(this).data('scroll')).offset().top+1

    },2000);
    //Add Active class
    if ($(window).width() > 786) {

      $(this).addClass('active').parent().siblings().find('a').removeClass('active');
      
     }
  });

  //sync links with sections

  $(window).on('scroll', function(){
    if ($(window).width() > 786) { 
      $('.block').each(function () {

        if ($(window).scrollTop() >= $(this).offset().top) {

          $('a').removeClass('active');

          var id = $(this).attr('id');

          $('.navbar li a[data-scroll="' + id + '"]').addClass('active');

        }
      })
    }
          ///// sync links
          
    //scroll to top

    if ($(window).scrollTop()>= 1000)
    {
        if ($('.scroll_to_top').is(":hidden"))
        {

            $('.scroll_to_top').fadeIn(400);

        }
    }
    else
    {
        $('.scroll_to_top').fadeOut(400);
    }
  })
  //scroll to top

  $('.scroll_to_top').on('click', function (e) {

      e.preventDefault();

      $('html, body').animate({

          scrollTop: 0

      }, 2000)

  })
});
