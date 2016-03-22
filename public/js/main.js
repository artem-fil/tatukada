'use strict';

$(function(){

  var width = 100;
  var animationSpeed = 1100;
  var pause = 3000;
  var $slider = $('#gallery-slider');
  var $slides = $slider.find('.slide');
  var $numSlides = $slides.length;
  var currentSlide = 1;
  var $buttons = $('.gallery-slider__btn');
  var interval;
  var state = false;

  function startSlider(){
    interval = setInterval(function(){
      $slider.animate({'margin-left': '-='+width+'%'}, animationSpeed, function(){
        currentSlide++;
        $buttons.eq(currentSlide-1).addClass('gallery-slider__btn--active');
        $buttons.eq(currentSlide-2).removeClass('gallery-slider__btn--active');
        if(currentSlide === $numSlides) {
          currentSlide = 1;
          $buttons.eq(0).addClass('gallery-slider__btn--active');
          $slider.css('margin-left', 0);
        }
      });
    }, pause);
    state = true;
  };

  function pauseSlider() {
    clearInterval(interval);
    state = false;
  }

  startSlider();

  $slider.click(function(){
    if(!state) {
      startSlider();
    }
  })

  $buttons.eq(0).click(function(){
    pauseSlider();
    $slider.animate({'margin-left': 0}, 500);
    currentSlide = 1;
  })
  $buttons.eq(1).click(function(){
    pauseSlider();
    $slider.animate({'margin-left': '-100%'}, 500);
    currentSlide = 2;
  })
  $buttons.eq(2).click(function(){
    pauseSlider();
    $slider.animate({'margin-left': '-200%'}, 500);
    currentSlide = 3;
  })
  $buttons.eq(3).click(function(){
    pauseSlider();
    $slider.animate({'margin-left': '-300%'}, 500);
    currentSlide = 4;
  })
  $buttons.eq(4).click(function(){
    pauseSlider();
    $slider.animate({'margin-left': '-400%'}, 500);
    currentSlide = 5;
  })
});
