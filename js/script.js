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
    responsive: [
      {
        breakpoint: 1200,

        settings: {
          dots: true,
          dotsClass: 'slick-dots_maison-top-slider',
        }
      }
    ]
  });
  $('.top-slider')
   .on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slider-count #current').html(currentSlide+1);
  });

  $('.navbar-toggler-icon').on('click', function() {
    $('.navbar-nav').toggleClass('navbar-nav_on-click');
  });

  $("#price").slider({
	  min: 0,
	  max: 250,
	  values: [0,250],
	  range: true,
    stop: function(event, ui) {
		  jQuery("input#minCost").val(jQuery("#price").slider("values",0));
		  jQuery("input#maxCost").val(jQuery("#price").slider("values",1));
    },
    slide: function(event, ui){
		  jQuery("input#minCost").val(jQuery("#price").slider("values",0));
		  jQuery("input#maxCost").val(jQuery("#price").slider("values",1));
    }
  });

  $("input#minCost").change(function(){
	  var value1=$("input#minCost").val();
	  var value2=$("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
		  value1 = value2;
		  $("input#minCost").val(value1);
	  }
	  $("#price").slider("values",0,value1);
  });


  $("input#maxCost").change(function(){
	  var value1=$("input#minCost").val();
	  var value2=$("input#maxCost").val();

	  if (value2 > 250) { value2 = 250; jQuery("input#maxCost").val(250)}

	  if(parseInt(value1) > parseInt(value2)){
		  value2 = value1;
		  $("input#maxCost").val(value2);
	  }
	  $("#price").slider("values",1,value2);
  });
});
