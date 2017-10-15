$(document).ready(function() {
  $('select').niceSelect();

  $('.top-slider').on('init', function(event, slick){
    $('.top-slider__arrows .container').append('<div class="slider-count"><p><span id="current">1</span> of <span id="total">'+slick.slideCount+'</span></p></div>');
  });
  $('.top-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $("#top-slider__next-arrow"),
    prevArrow: $("#top-slider__prew-arrow"),
  });
  $('.top-slider')
   .on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slider-count #current').html(currentSlide+1);
  });

  $('.navbar-toggler-icon').on('click', function() {
    $('.navbar-nav').toggleClass('navbar-nav_on-click');
  });
});
