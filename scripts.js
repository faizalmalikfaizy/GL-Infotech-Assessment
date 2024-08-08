//Header Sticky
jQuery(window).scroll(function(){
    var sticky = jQuery('.header'),
        scroll = jQuery(window).scrollTop();
  
    if (scroll >= 50) sticky.addClass('my-fixed');
    else sticky.removeClass('my-fixed');
  });