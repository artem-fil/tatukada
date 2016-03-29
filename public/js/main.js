'use strict';


$(function(){

  (function(){
    var $offerCtrlPrev = $('.offer-controls__btn').eq(0);
    var $offerCtrlNext = $('.offer-controls__btn').eq(1);
    var $offerPhotos = $('.offer-image-list-li');
    var $offerTexts = $('.offer-text-list-li');
    var numOffers = $offerPhotos.length;
    var prevOffer = numOffers-1;
    var currentOffer = 0;
    var nextOffer = 1;
    var offerSpeed = 500;

    $offerCtrlNext.click(function(){
      $offerTexts.eq(currentOffer).animate({'opacity': '0'}, offerSpeed);
      $offerTexts.eq(nextOffer).animate({'opacity': '1'}, offerSpeed);
      $offerPhotos.eq(currentOffer).animate({'left': '-100%'}, offerSpeed/2, function() {
        $offerPhotos.eq(nextOffer).animate({'left': '0'}, offerSpeed);
        prevOffer = currentOffer;
        currentOffer = nextOffer;
        nextOffer++;
        if (currentOffer === numOffers-1) {
          nextOffer = 0;
        }
      });
    });

    $offerCtrlPrev.click(function(){
      $offerTexts.eq(currentOffer).animate({'opacity': '0'}, offerSpeed);
      $offerTexts.eq(prevOffer).animate({'opacity': '1'}, offerSpeed);
      $offerPhotos.eq(currentOffer).animate({'left': '-100%'}, offerSpeed/2, function(){
        $offerPhotos.eq(prevOffer).animate({'left': '0'}, offerSpeed);
        nextOffer = currentOffer;
        currentOffer = prevOffer;
        prevOffer--;
        if (currentOffer === 0) {
          prevOffer = numOffers-1;
        }
      });
    });
  })();

  (function(){
    var $card = $('#card');
    setInterval(function(){
      $card.hasClass('flipped') ? $card.removeClass('flipped') : $card.addClass('flipped') ;
    }, 5000);
  })();

  (function(){
    var $chefCtrlPrev = $('.chefs-controls__btn').eq(0);
    var $chefCtrlNext = $('.chefs-controls__btn').eq(1);
    var $chefsPhotos = $('.chefs-photo-container img');
    var $chefsCards = $('.chefs-info-list-li');
    var numChefs = $chefsPhotos.length;
    var prevChefImage = numChefs-1;
    var currentChefImage = 0;
    var nextChefImage = 1;
    var speed = 500;
    var currentCard = 1;

    $chefCtrlNext.click(function(){
      $chefsCards.eq(currentChefImage).animate({'opacity': '0'}, speed);
      $chefsCards.eq(nextChefImage).animate({'opacity': '1'}, speed);
      $chefsPhotos.eq(currentChefImage).animate({'opacity': '0'}, speed);
      $chefsPhotos.eq(nextChefImage).animate({'opacity': '1'}, speed);
      prevChefImage = currentChefImage;
      currentChefImage = nextChefImage;
      nextChefImage++;
      if (currentChefImage === numChefs-1) {
        nextChefImage = 0;
      }
    });

    $chefCtrlPrev.click(function(){
      $chefsCards.eq(currentChefImage).animate({'opacity': '0'}, speed);
      $chefsCards.eq(prevChefImage).animate({'opacity': '1'}, speed);
      $chefsPhotos.eq(currentChefImage).animate({'opacity': '0'}, speed);
      $chefsPhotos.eq(prevChefImage).animate({'opacity': '1'}, speed);
      nextChefImage = currentChefImage;
      currentChefImage = prevChefImage;
      prevChefImage--;
      if (currentChefImage === 0) {
        prevChefImage = numChefs-1;
      }
    });
  })();

  (function(){
    var $tweetSlider = $('#tweet-slider');
    var $tweets = $('.twitter-post-list-li');
    var numTweets = $tweets.length;
    var currentTweet = 1;
    var $tweetButtons = $('.twitter-controls__btn');

    function startTweetSlider(){
      setInterval(function(){
        $tweetSlider.animate({'margin-left': '-='+100+'%'}, 600, function(){
          currentTweet++;
          $tweetButtons.eq(currentTweet-1).addClass('twitter-controls__btn--active');
          $tweetButtons.eq(currentTweet-2).removeClass('twitter-controls__btn--active');
          if(currentTweet === numTweets) {
            currentTweet = 1;
            $tweetButtons.eq(0).addClass('twitter-controls__btn--active');
            $tweetSlider.css('margin-left', 0);
          }
        });
      }, 6000);
      state = true;
    };

    startTweetSlider();
  })();

  (function(){
    var $overlay = $('.video-overlay').eq(0)
    var video = document.getElementById('video');
    $('#play__btn').click(function(){
      $overlay.animate({'opacity': '0'}, 400, function(){
        $overlay.hide();
        video.play();
      });
    })
  })();

  var width = 100;
  var animationSpeed = 1000;
  var pause = 5000;
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
  };

  startSlider();

  $slider.mouseleave(function(){
    if(!state) {
      startSlider();
    }
  });

  function setActive(position) {
    var j = $buttons.length;
    for (var i=0; i<j; i++) {
      $buttons.eq(i).removeClass('gallery-slider__btn--active');
    }
    $buttons.eq(position).addClass('gallery-slider__btn--active');
  }

  $buttons.eq(0).click(function(){
    pauseSlider();
    $slider.animate({'margin-left': 0}, 500);
    currentSlide = 1;
    setActive(0);
  })
  $buttons.eq(1).click(function(){
    pauseSlider();
    $slider.animate({'margin-left': '-100%'}, 500);
    currentSlide = 2;
    setActive(1);
  })
  $buttons.eq(2).click(function(){
    pauseSlider();
    $slider.animate({'margin-left': '-200%'}, 500);
    currentSlide = 3;
    setActive(2);
  })
  $buttons.eq(3).click(function(){
    pauseSlider();
    $slider.animate({'margin-left': '-300%'}, 500);
    currentSlide = 4;
    setActive(3);
  })
  $buttons.eq(4).click(function(){
    pauseSlider();
    $slider.animate({'margin-left': '-400%'}, 500);
    currentSlide = 5;
    setActive(4);
  })

});
