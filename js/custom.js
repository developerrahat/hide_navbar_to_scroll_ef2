$(document).ready(function() {
   /* When the user scrolls down,then change  the navbar color.*/

$(window).on('scroll',function() {
    if($(window).scrollTop()){
      $('.scroll-header').addClass('white');
    }
    else{
      $('.scroll-header').removeClass('white');
    }
    
  });


// type js

var typed = new Typed('.typed', {
  strings: [
    "Web Designer.",
    "Web Developer.",
    "Freelancer."
  ],
  typeSpeed:60,
  backSpeed:50,
  startDelay:100,
  backDelay:1000,

  loop: true,
  loopCount: Infinity,

  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,

});


// particles js





});


// js code start here






