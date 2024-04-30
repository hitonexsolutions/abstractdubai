(function ($) {
	'use strict';
	jQuery(document).ready(function () {
    // Pageloader
    //jQuery(window).on("load", function () {
      $(".oculoader").addClass('loaded');
    //});
  
    
    
		jQuery('.panel-group .panel-heading-border:first').addClass('active').next().show();
		jQuery('.panel-group .panel-heading-border').click(function(){
		if( jQuery(this).next().is(':hidden') ) {
		jQuery('.panel-group .panel-heading-border').removeClass('active').next().slideUp();
		jQuery(this).toggleClass('active').next().slideDown();
		}
		return true;
		});
		
		
        $(function () {
            $('a[href="#search"]').on('click', function(event) {
                event.preventDefault();
                $('#search').addClass('open');
                $('#search > form > input[type="search"]').focus();
            });
            
            $('#search, #search button.close').on('click keyup', function(event) {
                if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
                    $(this).removeClass('open');
                }
            });
        });

        $('.slider_carousel_1').on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace)  {
              return;
            }
            var carousel = e.relatedTarget;
            $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
        }).owlCarousel({
            loop: true,
            autoplay: false, //Set AutoPlay to 3 seconds 
            items : 1,
            nav: true,
            navText: ["<span class='show-for-sr'>prev</span>","<span class='show-for-sr'>next</span>"],
            animateIn: 'fadeIn',
            animateOut: 'zoomOut',
            margin: 0,
            smartSpeed: 500,
            dots: true,
            responsiveClass: true,
            responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        dots: true
                    },
                    600: {
                        items: 1,
                        nav: true,
                        dots: true
                    },
                    1120: {
                        items: 1,
                        dots: true,
                        nav: true
                    }
                }
        });

        // Slider 2
        $('.slider_carousel_2').on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace)  {
              return;
            }
            var carousel = e.relatedTarget;
            $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
        }).owlCarousel({
            loop: true,
            autoplay: false, //Set AutoPlay to 3 seconds 
            items : 1,
            nav: true,
            navText: ["<span class='show-for-sr'><i class='fa fa-angle-up'></i></span>","<span class='show-for-sr'><i class='fa fa-angle-down'></i></span>"],
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
            margin: 0,
            smartSpeed: 500,
            dots: true,
            responsiveClass: true,
            responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        dots: true
                    },
                    600: {
                        items: 1,
                        nav: true,
                        dots: true
                    },
                    1120: {
                        items: 1,
                        dots: true,
                        nav: true
                    }
                }
        });

        // Slider 3
        $('.slider_carousel_3').on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace)  {
                  return;
            }
            var carousel = e.relatedTarget;
            $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
        }).owlCarousel({
            loop: true,
            autoplay: false, //Set AutoPlay to 3 seconds 
            items : 1,
            nav: true,
            navText: ["<span class='show-for-sr'>prev</span>","<span class='show-for-sr'>next</span>"],
            animateIn: 'slideInLeft',
            animateOut: 'slideOutLeft',
            margin: 0,
            smartSpeed: 500,
            dots: true,
            responsiveClass: true,
            responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        dots: true
                    },
                    600: {
                        items: 1,
                        nav: true,
                        dots: true
                    },
                    1120: {
                        items: 1,
                        dots: true,
                        nav: true
                    }
                }
        });

        // Slider 4
        $('.slider_carousel_4').on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace)  {
                  return;
            }
            var carousel = e.relatedTarget;
            $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
        }).owlCarousel({
            loop: true,
            autoplay: false, //Set AutoPlay to 3 seconds 
            items : 1,
            nav: true,
            navText: ["<span class='show-for-sr'>prev</span>","<span class='show-for-sr'>next</span>"],
            animateIn: 'zoomIn',
            animateOut: 'fadeOut',
            margin: 0,
            smartSpeed: 500,
            dots: true,
            responsiveClass: true,
            responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        dots: true
                    },
                    600: {
                        items: 1,
                        nav: true,
                        dots: true
                    },
                    1120: {
                        items: 1,
                        dots: true,
                        nav: true
                    }
                }
        });
     

         
        
        $(".portfolio_carousel_1").owlCarousel({
            autoplay: 3000, //Set AutoPlay to 3 seconds 
            items : 1,
            loop: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            dots : false,
            nav: true,
        	responsiveClass: true,
        	responsive: {
                0:{
                  items: 1
                },
                480:{
                  items: 1
                },
                768:{
                  items: 1
                },
                991:{
                  items: 1
                },
                1024:{
                  items: 1
                }
            }
     
        });

        $(".blog_carousel_1").owlCarousel({
            autoplay: 3000, //Set AutoPlay to 3 seconds 
            items : 1,
            loop: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            dots : false,
            nav: true,
            responsiveClass: true,
            responsive: {
                0:{
                  items: 1
                },
                480:{
                  items: 1
                },
                768:{
                  items: 1
                },
                991:{
                  items: 1
                },
                1024:{
                  items: 1
                }
            }
     
        });
      
        $(".team_carousel_1").owlCarousel({
        	autoplay: 3000, //Set AutoPlay to 3 seconds 
        	items : 4,
        	loop: true,
            margin: 30,
        	dots : true,
            nav: false,
        	responsiveClass: true,
        	responsive: {
                0:{
                  items: 1,
                },
                480:{
                  items: 2,
                },
                768:{
                  items: 3,
                },
                991:{
                  items: 4,
                },
                1024:{
                  items: 4,
                }
            } 
        });


        $(".testimonial_carousel_1").owlCarousel({
            autoplay: 3000, //Set AutoPlay to 3 seconds 
            items : 1,
            loop: true,
            margin: 30,
            dots : false,
            nav: false,
            responsiveClass: true,
        });
      
        $(".owl-carousel-slider-nav-3").owlCarousel({
        	autoplay: 3000, //Set AutoPlay to 3 seconds 
        	items : 3,
        	loop: true,
            margin: 30,
        	animateIn: 'fadeIn',
        	animateOut: 'fadeOut',
        	dots : false,
            nav: true,
        	responsiveClass: true,
        	responsive: {
                0:{
                  items: 1
                },
                480:{
                  items: 1
                },
                768:{
                  items: 2
                },
                991:{
                  items: 3
                },
                1024:{
                  items: 3
                }
            } 
        });
      

        // Popup Video
        $('.fancybox-media').fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            helpers : {
                media : {}
            }
        });
        
        var $grid = $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          layoutMode: 'fitRows',
          masonry: {
            columnWidth: '.grid-sizer'
          }
        });

        var iso = $grid.data('isotope');
        var $filterCount = $('.filter-count');

        // bind filter button click
        $('.filters-button-group .button').on( 'click', function() {
            var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            $grid.isotope({ filter: filterValue });
            updateFilterCount();
        });

        function updateFilterCount() {
            $filterCount.text( iso.filteredItems.length);
        }
        //updateFilterCount();

        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
            });
        });



        function toggleIcon(e) {
            $(e.target)
            .prev('.panel-heading-border')
            .find(".more-less")
            .toggleClass('glyphicon-plus glyphicon-minus');
        }
        $('.panel-group').on('hidden.bs.collapse', toggleIcon);
        $('.panel-group').on('shown.bs.collapse', toggleIcon);

    });
})(jQuery);