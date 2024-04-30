var PowerSliderHandler = function ($scope, $) {
    var $controller = $scope.find(".swiper-container");


    var swiper_limit = $controller.data('swiper_limit');
    var swiper_autoplay = $controller.data('swiper_autoplay');
    var swiper_margin = $controller.data('swiper_margin');
    var swiper_loop = $controller.data('swiper_loop');


	if ($controller.length) {
		$controller.each(function (index, el) {

            // Slider 1 (page:1&2)
        var interleaveOffset = 0.5;
        var swiper = new Swiper('.slide_1 .swiper-container', {
          slidesPerView: swiper_limit,
          spaceBetween: swiper_margin,
          loop: swiper_loop,
          speed: 1000,
          observer: true, 
          observeParents: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true, 
          },
          on: {
            progress: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress;
                var innerOffset = interleaveOffset;
                var innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slider_item").style.transform =
                  "translate3d(" + innerTranslate + "px, 0, 0)";
              }      
            },
            touchStart: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },
            setTransition: function(speed) {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slider_item").style.transition =
                  speed + "ms";
              }
            }
          },
        });
       
        // Slider 2 (page:3&4)
        var interleaveOffset = 0.5;
        var swiper = new Swiper('.slide_2 .swiper-container', {
          slidesPerView: swiper_limit,
          spaceBetween: swiper_margin,
          autoplay: swiper_autoplay,
          loop: swiper_loop,
          speed: 1000,
          observer: true, 
          observeParents: true,
          watchSlidesProgress: true,
          mousewheel: true, 
          keyboard: true,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true,
          },
          on: {
            progress: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress;
                var innerOffset = interleaveOffset;
                var innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slider_item").style.transform =
                  "translate3d(" + innerTranslate + "px, 0, 0)";
              }      
            },
            touchStart: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },
            setTransition: function(speed) {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slider_item").style.transition =
                  speed + "ms";
              }
            }
          },
          breakpoints: {
            // when window width is >= 991px
            991: {
              slidesPerView: 3,
              spaceBetween: 10,
            }
          },
        });


        // Slider 3 (page:5)
        var interleaveOffset = 0.5;
        var swiper = new Swiper('.slide_3 .swiper-container', {
          slidesPerView: swiper_limit,
          grabCursor: true,
          spaceBetween: swiper_margin,
          loop: swiper_loop,
          speed: 1000,
          observer: true, 
          observeParents: true,
          watchSlidesProgress: true,
          mousewheel: true,
          keyboard: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
          on: {
            progress: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress;
                var innerOffset = interleaveOffset;
                var innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slider_item").style.transform =
                  "translate3d(" + innerTranslate + "px, 0, 0)";
              }      
            },
            touchStart: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },
            setTransition: function(speed) {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slider_item").style.transition =
                  speed + "ms";
              }
            }
          }
        });    
        // Slider Popup Image
        $('.fancyswiper').fancybox({
          arrows: true,
          animationEffect: [
            "zoom-in-out",
          ],
          transitionEffect: [
            "zoom-in-out",
          ],
          buttons: [
            "zoom",
            "fullScreen",
            "close"
          ],
          infobar: false,
        });
		});
    }
}
jQuery(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
        "frontend/element_ready/power_element_slider.default",
        PowerSliderHandler
    );
}); 